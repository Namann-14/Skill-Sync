const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000', // Adjust the origin as needed
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage });


const jobSkills = {
  "Software Engineer": [
    "Java", "Python", "C++", "Go", "Scala", "Ruby", "Algorithms", "Data Structures", "Version Control", "Git", "Problem Solving", "Software Architecture", "RESTful APIs", "Microservices", "OOP", "SQL", "Agile Development", "Unit Testing", "Cloud Computing", "CI/CD",
  ],
  "Data Scientist": [
    "Python", "Machine Learning", "Deep Learning", "Data Analysis", "Statistics", "SQL", "Pandas", "NumPy", "TensorFlow", "Big Data", "AI", "Data Visualization", "R", "Hadoop", "Neural Networks", "Data Cleaning", "Predictive Modeling", "SQL Optimization", "Feature Engineering", "Data Mining",
  ],
  "Web Developer": [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "Django", "Vue.js", "SASS", "WebSockets", "GraphQL", "RESTful APIs", "Version Control", "Webpack", "Bootstrap", "Responsive Design", "Cross-Browser Compatibility", "SEO", "UI/UX Design", "Web Security",
  ],
  "DevOps Engineer": [
    "Docker", "Kubernetes", "AWS", "Azure", "GCP", "CI/CD", "Terraform", "Ansible", "Jenkins", "Linux", "Networking", "Infrastructure as Code", "Automation", "Monitoring", "Scripting", "Version Control", "Cloud Architecture", "Security", "Serverless Computing", "Incident Management",
  ],
  "Mobile Developer": [
    "Android", "Java", "Kotlin", "Swift", "React Native", "Flutter", "iOS", "Objective-C", "Xcode", "Firebase", "APIs", "UI/UX Design", "Mobile App Development", "App Store Optimization", "Cross-Platform Development", "Version Control", "Unit Testing", "Performance Optimization", "Push Notifications",
  ],
  "Game Developer": [
    "C++", "Unity", "Unreal Engine", "C#", "Game Design", "3D Modeling", "Graphics Programming", "Physics Simulation", "AI for Games", "Game Engines", "Networking", "Shaders", "Multiplayer", "VR/AR", "Game Monetization", "Performance Optimization", "Cross-Platform Development", "Game Testing", "Augmented Reality",
  ],
  "Cloud Engineer": [
    "AWS", "Azure", "GCP", "Cloud Architecture", "Virtualization", "Networking", "Kubernetes", "Docker", "Terraform", "CI/CD", "Automation", "Security", "Cloud Storage", "Serverless Computing", "API Management", "Scripting", "Backup and Recovery", "Monitoring", "Load Balancing",
  ],
  "Cybersecurity Analyst": [
    "Network Security", "Firewalls", "Ethical Hacking", "Encryption", "Penetration Testing", "Vulnerability Assessment", "Incident Response", "Risk Management", "SIEM", "Malware Analysis", "Security Audits", "Compliance", "Cyber Threat Intelligence", "Data Loss Prevention", "Network Monitoring", "Security Policies",
  ],
  "Business Analyst": [
    "Requirements Gathering", "Data Analysis", "Business Process Modeling", "Agile Methodology", "Project Management", "SQL", "Excel", "Stakeholder Management", "Problem Solving", "Process Improvement", "Communication", "Documentation", "Market Research", "Change Management", "Business Intelligence", "Data Visualization",
  ],
  "Systems Administrator": [
    "Linux", "Windows Server", "Networking", "Virtualization", "Cloud Services", "Active Directory", "Server Management", "Troubleshooting", "Scripting", "Backups", "Security", "Firewalls", "Storage Management", "Monitoring", "DNS", "IT Support", "Patch Management", "Automation",
  ],
  "IT Support Specialist": [
    "Helpdesk Support", "Troubleshooting", "Networking", "Hardware Repair", "Software Installation", "Customer Service", "Remote Desktop", "Active Directory", "Windows OS", "Linux", "Mac OS", "ITIL", "Ticketing Systems", "Scripting", "Backup Solutions", "VPNs", "Email Systems", "Security",
  ],
  "Network Engineer": [
    "Networking Protocols", "Routing", "Switching", "Firewalls", "TCP/IP", "Cisco", "Networking Hardware", "Wi-Fi", "DNS", "VPN", "LAN/WAN", "Network Security", "Network Design", "Network Troubleshooting", "Load Balancing", "Network Monitoring", "Network Performance",
  ],
  "AI Engineer": [
    "Python", "Machine Learning", "Deep Learning", "TensorFlow", "Keras", "Pytorch", "Data Analysis", "AI Algorithms", "Neural Networks", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Data Structures", "Mathematics", "Model Training", "Big Data", "AI Ethics",
  ],
  "UI/UX Designer": [
    "UI Design", "UX Research", "Wireframing", "Prototyping", "Figma", "Sketch", "Adobe XD", "User Testing", "Human-Centered Design", "Design Systems", "Interaction Design", "Mobile App Design", "Responsive Design", "HTML/CSS", "Information Architecture", "Usability Testing", "Usability Principles",
  ],
  "Software Architect": [
    "System Design", "Software Architecture", "UML", "Design Patterns", "Microservices", "Cloud Architecture", "Distributed Systems", "Agile Methodology", "OOP", "Architecture Documentation", "API Design", "DevOps", "CI/CD", "Security", "Scalability", "Performance Optimization", "Code Review",
  ],
  "Full Stack Developer": [
    "JavaScript", "Node.js", "React", "Vue.js", "MongoDB", "Express", "CSS", "HTML", "Database Design", "SQL", "RESTful APIs", "GraphQL", "Version Control", "Git", "Cloud Computing", "DevOps", "CI/CD", "Agile Methodology", "Unit Testing", "UI/UX Design",
  ],
  "Blockchain Developer": [
    "Blockchain", "Ethereum", "Smart Contracts", "Solidity", "Cryptocurrency", "Decentralized Applications (DApps)", "Cryptography", "Bitcoin", "Hyperledger", "Blockchain Security", "Node.js", "Truffle", "Web3.js", "IPFS", "Blockchain Protocols", "Smart Contract Audits", "Distributed Ledger Technology",
  ],
  "Product Manager": [
    "Product Lifecycle", "Agile Methodology", "Market Research", "Customer Feedback", "Roadmap Planning", "Cross-Functional Collaboration", "Product Strategy", "Data Analysis", "Stakeholder Management", "Business Analysis", "Prototyping", "Project Management", "Requirements Gathering", "Product Development", "Marketing Strategy", "Product Launch",
  ],
  "Quality Assurance Engineer": [
    "Manual Testing", "Automation Testing", "Test Cases", "Bug Tracking", "CI/CD", "JUnit", "Selenium", "Test Automation", "Unit Testing", "Integration Testing", "Load Testing", "Performance Testing", "UAT", "Agile Methodology", "Security Testing", "Regression Testing", "API Testing",
  ],
  "Database Administrator": [
    "SQL", "NoSQL", "Database Management", "Database Design", "Database Optimization", "Backup & Recovery", "DBMS", "MySQL", "PostgreSQL", "MongoDB", "Data Migration", "Performance Tuning", "Data Integrity", "Data Security", "ETL", "Cloud Databases", "Big Data", "Replication",
  ],
};



const extractSkillsFromResume = (resumeText) => {
  const extractedSkills = [];
  const keywords = [
    "Java", "Python", "C++", "Go", "Scala", "Ruby", "JavaScript", "React", "Node.js", "Docker", "Kubernetes", "AWS", "SQL", "Git", "Machine Learning", "Data Analysis", "Hadoop", "Vue.js", "Android", "iOS", "Game Design", "C#", "Unreal Engine", "Unity", "TensorFlow",
  ];
  
  keywords.forEach((keyword) => {
    if (resumeText.toLowerCase().includes(keyword.toLowerCase())) {
      extractedSkills.push(keyword);
    }
  });
  return extractedSkills;
};


const learningTimeEstimate = {
  "Java": 2,
  "Python": 2,
  "C++": 3,
  "Go": 3,
  "Scala": 3,
  "Ruby": 3,
  "Algorithms": 4,
  "Data Structures": 4,
  "Git": 1,
  "Version Control": 1,
  "Software Development": 4,
  "Problem Solving": 4,
  "OOP": 3,
  "SQL": 2,
  "RESTful APIs": 2,
  "Microservices": 4,
  "Machine Learning": 6,
  "Data Analysis": 4,
  "Statistics": 4,
  "TensorFlow": 6,
  "Pandas": 3,
  "NumPy": 3,
  "Data Visualization": 3,
  "Hadoop": 5,
  "R": 4,
  "Big Data": 5,
  "AI": 6,
  "Deep Learning": 6,
  "Neural Networks": 6,
  "HTML": 1,
  "CSS": 1,
  "JavaScript": 2,
  "React": 3,
  "Node.js": 3,
  "Express": 3,
  "MongoDB": 3,
  "Django": 4,
  "Vue.js": 3,
  "SASS": 2,
  "WebSockets": 3,
  "GraphQL": 3,
  "Version Control": 1,
  "Webpack": 3,
  "Bootstrap": 2,
  "Docker": 3,
  "Kubernetes": 4,
  "AWS": 5,
  "GCP": 5,
  "CI/CD": 4,
  "Terraform": 4,
  "Ansible": 4,
  "Jenkins": 4,
  "Linux": 3,
  "Networking": 3,
  "Monitoring": 3,
  "Scripting": 2,
  "Infrastructure as Code": 4,
  "Android": 3,
  "Kotlin": 3,
  "Swift": 3,
  "Flutter": 3,
  "React Native": 3,
  "iOS": 3,
  "Objective-C": 3,
  "Xcode": 3,
  "Firebase": 3,
  "APIs": 2,
  "Mobile App Development": 3,
  "UI/UX Design": 3,
  "Game Design": 4,
  "3D Modeling": 4,
  "Physics": 4,
  "Graphics Programming": 4,
  "AI for Games": 5,
  "Multiplayer": 4,
  "Game Engines": 5,
  "Networking": 3,
  "Shaders": 4,
  "VR/AR": 5
};


app.post("/api/analyze", upload.single("resume"), (req, res) => {
  const { jobTitle } = req.body;
  const resumeFile = req.file;

  if (!resumeFile || !jobTitle) {
    return res.status(400).json({ message: "Resume and Job Title are required." });
  }


  const mockResumeText = "Experienced in Ruby, Go, React, and Kubernetes. Skilled with Machine Learning and Docker. Familiar with Java and Python.";

  
  const extractedSkills = extractSkillsFromResume(mockResumeText);

 
  const requiredSkills = jobSkills[jobTitle];

  if (!requiredSkills) {
    return res.status(400).json({ message: "Job title not found." });
  }

  
  const matchingSkills = extractedSkills.filter(skill => requiredSkills.includes(skill));
  const matchPercentage = Math.floor((matchingSkills.length / requiredSkills.length) * 100);


  const missingSkills = requiredSkills.filter(skill => !matchingSkills.includes(skill));


  const missingSkillsPercentage = Math.floor((missingSkills.length / requiredSkills.length) * 100);


  const learningTime = missingSkills.map(skill => ({
    skill,
    time: learningTimeEstimate[skill] || 4, 
  }));


  const analysisResult = {
    matchPercentage,
    matchingSkills,
    missingSkills,
    missingSkillsPercentage,
    recommendedLearning: learningTime,
  };

  return res.json({ result: analysisResult });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});