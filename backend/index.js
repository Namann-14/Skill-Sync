const express = require('express');
const cors = require('cors');
const Connection = require('./database/db');
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRoutes.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3002",
];

const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests from allowed origins or no origin (e.g., server-to-server requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  credentials: true, // Allow cookies and other credentials
};

app.use(cors(corsOptions)); // Apply CORS options

app.use(express.json());
Connection();
app.use(cookieParser());

app.use('/api/user', userRoute);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

