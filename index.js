require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
1;
const cors = require("cors");
const Port = 5000;
const app = express();

// Adjust the limit for JSON requests
app.use(bodyParser.json({ limit: "10mb" }));

// Adjust the limit for URL-encoded requests
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(bodyParser.json());
// Middleware to parse JSON bodies

// Set up CORS with specific domain
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your specific domain
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/institute?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.6",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/api/test", (req, res) => {
  res.send("Server Working !!!");
});

// Import route files
const AdmissionRoutes = require("./Routes/AdmissionRoutes");
const EnquiryRoutes = require("./Routes/EnquiryRoutes");
const AssignCourseRoutes = require("./Routes/AssignCourseRoutes");
const CourseRoutes = require("./Routes/CourseRoutes");
const authRoutes = require("./Routes/AuthRoute");
const feesRoutes = require("./Routes/FeesRoutes");
const verifyToken = require("./Controllers/Middleware/AuthMiddleware");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api",verifyToken, AdmissionRoutes);
app.use("/api",verifyToken, EnquiryRoutes);
app.use("/api",verifyToken, AssignCourseRoutes);
app.use("/api",verifyToken, CourseRoutes);
app.use("/api",verifyToken, feesRoutes);

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
