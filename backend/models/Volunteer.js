// models/Volunteer.js
const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 10 },
  email: { type: String, required: true, unique: true, trim: true },
  phone: { type: String, required: true },
  skills: { type: String },
  interest: { type: String, required: true },
  availability: { type: Date, required: true },
  verified: { type: Boolean, default: false },
}, {
  timestamps: true
});

const VolunteerModel = mongoose.model("Volunteer", volunteerSchema);

module.exports = VolunteerModel;
