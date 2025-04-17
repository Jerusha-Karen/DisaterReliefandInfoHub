// server.js
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");

const UserModel = require("./models/Users");
const DonationModel = require("./models/Donors"); 
const VolunteerModel = require("./models/Volunteer");
const DonateBloodModel = require('./models/DonateBlood');


connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Login Route
app.post("/login", async (req, res) => {
  const { name, email, password } = req.body;
  UserModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Incorrect Password");
        }
      } else {
        res.json("Not a User");
      }
    });
});

// Register Route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await UserModel.create({ name, email, password });
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(400).json({ message: "Registration failed", error: err.message });
  }
});


// ✅ Donation Route
app.post("/donations", async (req, res) => {
  try {
    const { donorName, amount, cause } = req.body;
    const donation = new DonationModel({ donorName, amount, cause });
    await donation.save();
    res.status(201).json({ message: "Donation saved successfully!" });
  } catch (error) {
    console.error("Error saving donation:", error);
    res.status(500).json({ error: "Failed to save donation" });
  }
});


// Volunteer Route
// Volunteer submission route
app.post("/volunteer", async (req, res) => {
  try {
    const data = req.body;
    if (!data.verified) {
      return res.status(400).json({ message: "Verification failed" });
    }

    const newVolunteer = new VolunteerModel(data);
    await newVolunteer.save();
    res.status(201).json({ message: "Volunteer registered successfully!" });
  } catch (error) {
    console.error("Volunteer registration error:", error);
    res.status(500).json({ error: "Failed to register volunteer" });
  }
});

//DonateBlood
app.post("/donateblood", async (req, res) => {
  try {
    // Log the request body to check incoming data
    console.log("Received donation form:", req.body);

    const donation = await DonateBloodModel.create(req.body);
    res.status(201).json({ message: "Blood donation form submitted", donation });
  } catch (error) {
    console.error("Donation submission failed:", error.message);
    res.status(400).json({ message: "Submission failed", error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
