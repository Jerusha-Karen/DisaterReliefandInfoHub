const mongoose = require("mongoose");

const DonateBloodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Prefer not to say"],
    required: true
  },
  age: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  weight: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  height: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    required: true
  },
  donatedBefore: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  takesMedicine: {
    type: String,
    enum: ["Yes", "No"],
    required: true
  },
  drugUsage: {
    type: String,
    enum: ["Occasionally", "Yes", "No"],
    required: true
  },
  govtId: {
    type: String,
    required: true
  },
  verifyText: {
    type: String,
    required: true
  },
  consent: {
    type: Boolean,
    required: true
  },
}, { timestamps: true });

const DonateBloodModel = mongoose.model("DonateBlood", DonateBloodSchema);

module.exports = DonateBloodModel;
