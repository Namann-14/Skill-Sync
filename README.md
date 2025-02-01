</head>
<body>
  <h1>Skill Sync</h1>
  <p>Skill Sync is an innovative platform designed to bridge the gap between your current skill set and the requirements of your dream job. With Skill Sync, you can upload your resume, select your target job, and receive a detailed analysis that includes:</p>
  <ul>
    <li>Skill Gap Analysis &amp; Skill Extraction</li>
    <li>Personalized Roadmap with Course Recommendations</li>
    <li>Timeline Generation for Acquiring Missing Skills</li>
    <li>Job Match Percentage</li>
  </ul>

  <div class="section" id="features">
    <h2>Features</h2>
    <ul>
      <li><strong>Resume Upload &amp; Skill Extraction:</strong> Upload your resume (PDF or text) to automatically extract your skills.</li>
      <li><strong>Job Role Selection:</strong> Choose from a dropdown of pre-defined job roles with curated required skills.</li>
      <li><strong>Skill Gap Comparison:</strong> Compare your extracted skills with the job’s required skills to identify missing areas.</li>
      <li><strong>Personalized Roadmap &amp; Timeline:</strong> Receive recommendations and a timeline to learn the missing skills.</li>
      <li><strong>Job Match Percentage:</strong> Get a calculated percentage indicating how closely your skills match the target job.</li>
    </ul>
  </div>

  <div class="section" id="folder-structure">
    <h2>Folder Structure</h2>
    <h3>Backend Folder Structure</h3>
    <pre>
skill-gap-analysis/
└── backend/
    ├── src/
    │   ├── app.js                # Main server entry point
    │   ├── routes/
    │   │   └── skillRoutes.js    # API routes for skill analysis
    │   ├── controllers/
    │   │   └── skillController.js  # Business logic for skill extraction, comparison, and timeline generation
    │   ├── services/
    │   │   └── skillService.js   # Helper functions for comparing skills and generating timelines
    │   ├── data/
    │   │   └── jobSkills.json    # JSON file with job roles and required skills
    │   ├── utils/
    │   │   └── skillExtractor.js # Utility for extracting skills from resume text
    │   └── uploads/              # Temporary folder for uploaded resumes
    ├── package.json              # Node.js dependencies and scripts
    └── .env                      # Environment variables
    </pre>

  <div class="section" id="tech-stack">
    <h2>Tech Stack</h2>
    <h3>Frontend</h3>
    <ul>
      <li><strong>Next.js:</strong> React framework for server-side rendering and routing.</li>
      <li><strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid responsive design.</li>
      <li><strong>Accertinity UI:</strong> Custom UI components for a modern, sleek interface.</li>
    </ul>
    <h3>Backend</h3>
    <ul>
      <li><strong>Node.js &amp; Express:</strong> Server-side runtime and framework for building APIs.</li>
      <li><strong>Multer:</strong> Middleware for handling file uploads.</li>
      <li><strong>pdf-parse:</strong> Library for extracting text from PDF resumes.</li>
      <li><strong>Custom NLP &amp; Skill Extraction:</strong> Built-in utilities for comparing skills.</li>
      <li><strong>JSON Data Files:</strong> For maintaining job roles and required skills (e.g., <code>jobSkills.json</code>).</li>
    </ul>
  </div>

  <div class="section" id="installation">
    <h2>Installation</h2>
    <h3>Backend Setup</h3>
    <ol>
      <li>Clone the repository:
        <pre>git clone https://github.com/Namann-14/Skill-Sync.git</pre>
      </li>
      <li>Navigate to the backend folder:
        <pre>cd Skill-Sync/backend</pre>
      </li>
      <li>Install dependencies:
        <pre>npm install express body-parser dotenv multer pdf-parse</pre>
      </li>
      <li>Create a <code>.env</code> file in the backend folder with:
        <pre>PORT=5000</pre>
      </li>
      <li>Start the backend server:
        <pre>node src/app.js</pre>
      </li>
    </ol>
    <h3>Frontend Setup</h3>
    <ol>
      <li>Navigate to the frontend folder:
        <pre>cd ../frontend</pre>
      </li>
      <li>Install dependencies:
        <pre>npm install react axios</pre>
      </li>
      <li>Create a <code>.env</code> file in the frontend folder if needed.</li>
      <li>Start the frontend:
        <pre>npm start</pre>
      </li>
    </ol>
  </div>

  <div class="section" id="usage">
    <h2>Usage</h2>
    <ol>
      <li>Go to the Skill Gap Analysis page on the frontend.</li>
      <li>Upload your resume via the file input. The backend will extract your skills.</li>
      <li>Select your desired job role from the dropdown list (populated from the backend).</li>
      <li>Click the "Analyze Skills" button.</li>
      <li>The system will display:
        <ul>
          <li>The extracted skills from your resume.</li>
          <li>A list of missing skills compared to the job requirements.</li>
          <li>The job match percentage.</li>
          <li>A timeline to learn the missing skills along with recommended courses.</li>
        </ul>
      </li>
    </ol>
  </div>

  <div class="section" id="api">
    <h2>API Endpoints</h2>
    <h3>Backend API Endpoints</h3>
    <ul>
      <li>
        <strong>POST <code>/api/upload</code></strong><br>
        <em>Description:</em> Uploads a resume (PDF) and extracts skills.<br>
        <em>Request:</em> Form-Data with key <code>resume</code> (PDF file).<br>
        <em>Response:</em>
        <pre>{
  "extractedSkills": ["JavaScript", "React"],
  "message": "Resume processed successfully"
}</pre>
      </li>
      <li>
        <strong>GET <code>/api/jobs</code></strong><br>
        <em>Description:</em> Returns a list of available job roles.<br>
        <em>Response:</em>
        <pre>{
  "jobs": ["Frontend Developer", "Backend Developer", "Data Scientist", ...]
}</pre>
      </li>
      <li>
        <strong>POST <code>/api/analyze</code></strong><br>
        <em>Description:</em> Compares extracted skills with the job requirements.<br>
        <em>Request:</em>
        <pre>{
  "extractedSkills": ["HTML", "CSS", "JavaScript"],
  "jobRole": "Frontend Developer"
}</pre>
        <em>Response:</em>
        <pre>{
  "requiredSkills": ["HTML", "CSS", "JavaScript", "React"],
  "missingSkills": ["React"],
  "matchingPercentage": "75.00"
}</pre>
      </li>
      <li>
        <strong>POST <code>/api/timeline</code></strong><br>
        <em>Description:</em> Generates a learning timeline for missing skills.<br>
        <em>Request:</em>
        <pre>{
  "missingSkills": ["React"]
}</pre>
        <em>Response:</em>
        <pre>{
  "timeline": [
    { "skill": "React", "duration": "1 weeks" }
  ]
}</pre>
      </li>
    </ul>
  </div>

  <div class="section" id="contributing">
    <h2>Contributing</h2>
    <p>Contributions are welcome! Please follow these steps:</p>
    <ol>
      <li>Fork the repository.</li>
      <li>Create a feature branch: <code>git checkout -b feature/my-feature</code>.</li>
      <li>Commit your changes: <code>git commit -am 'Add new feature'</code>.</li>
      <li>Push to the branch: <code>git push origin feature/my-feature</code>.</li>
      <li>Create a Pull Request.</li>
    </ol>
  </div>
</body>
</html>
