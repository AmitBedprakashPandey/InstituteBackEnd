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
const databse = process.env.DB_URL;
// Connect to MongoDB
mongoose
  .connect(databse, {
    useNewUrlParser: true,
  })
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
const CourseTypeRoutes = require("./Routes/CourseTypeRoutes");
const GenderRoutes = require("./Routes/GenderRoutes");
const FoundationRoutes = require("./Routes/FoundationRoutes");
const ReligionRoutes = require("./Routes/ReligionRoutes");
const StateRoutes = require("./Routes/StateRoutes");
const PaymentModeRoutes = require("./Routes/PaymentModeRoutes");
const SchoolRoutes = require("./Routes/SchoolRoutes");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", AdmissionRoutes);
app.use("/api", EnquiryRoutes);
app.use("/api", AssignCourseRoutes);
app.use("/api", CourseRoutes);
app.use("/api", feesRoutes);
app.use("/api", CourseTypeRoutes);
app.use("/api", GenderRoutes);
app.use("/api", FoundationRoutes);
app.use("/api", ReligionRoutes);
app.use("/api", StateRoutes);
app.use("/api", PaymentModeRoutes);
app.use("/api", SchoolRoutes);
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
