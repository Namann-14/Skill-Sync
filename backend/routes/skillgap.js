const express = require('express');
const router = express.Router();
const multer = require('multer');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdf = require('pdf-parse');
const mammoth = require('mammoth');

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Initialize Gemini API - Make sure your API key is in .env file
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/analyze', upload.single('resume'), async (req, res) => {
  try {
    const { jobTitle } = req.body;
    
    if (!req.file || !jobTitle) {
      return res.status(400).json({ error: 'Resume file and job title are required' });
    }
    
    console.log("Processing file:", req.file.mimetype, "Job title:", jobTitle);
    
    // Extract text from resume PDF or DOCX
    const resumeText = await extractTextFromFile(req.file);
    console.log("Extracted text length:", resumeText.length);
    
    // Use Gemini API to analyze the resume and job match
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    
    const prompt = `
    As a career advisor, analyze this resume against the job title "${jobTitle}".
    
    RESUME:
    ${resumeText}
    
    Provide a detailed analysis in JSON format with the following structure:
    {
      "matchPercentage": (number between 0-100),
      "skillGaps": [list of 3-5 specific skills missing for this job],
      "recommendedLearning": [list of 3-5 specific courses or resources to acquire these skills],
      "roadmap": [
        {
          "title": "Week 1-2",
          "tasks": [list of 2-3 specific learning tasks],
          "expectedOutcome": "specific outcome"
        },
        {
          "title": "Week 3-4",
          "tasks": [list of 2-3 specific learning tasks],
          "expectedOutcome": "specific outcome"
        }
      ]
    }
    
    Return ONLY the JSON object with no explanations, markdown formatting, or additional text.
    `;
    
    console.log("Sending request to Gemini API...");
    const result = await model.generateContent(prompt);
    const response = await result.response;
    console.log("API response received");
    
    const text = response.text();
    
    // Clean the response text to handle Markdown code blocks
    const cleanedText = text
      .replace(/```json\s*/, '')  // Remove opening ```json
      .replace(/```\s*$/, '')     // Remove closing ```
      .trim();                    // Trim any extra whitespace
      
    console.log("Cleaned text sample:", cleanedText.substring(0, 50) + "...");
    
    try {
      // Parse the JSON response
      const analysisData = JSON.parse(cleanedText);
      res.json(analysisData);
    } catch (jsonError) {
      console.error("JSON parsing error:", jsonError);
      console.log("Response text:", text);
      res.status(500).json({ 
        error: 'Failed to parse AI response', 
        details: jsonError.message 
      });
    }
  } catch (error) {
    console.error('Error analyzing resume:', error);
    res.status(500).json({ 
      error: 'Failed to analyze resume', 
      details: error.message 
    });
  }
});

async function extractTextFromFile(file) {
  const fileType = file.mimetype;
  
  try {
    if (fileType === 'application/pdf') {
      const data = await pdf(file.buffer);
      return data.text;
    } 
    else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      const result = await mammoth.extractRawText({ buffer: file.buffer });
      return result.value;
    }
    else {
      throw new Error('Unsupported file type. Please upload a PDF or DOCX file.');
    }
  } catch (error) {
    console.error('Error extracting text:', error);
    throw new Error(`Failed to extract text from the resume: ${error.message}`);
  }
}

module.exports = router;