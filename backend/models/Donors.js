const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true,
    min: 1
  },
  cause: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const DonationModel = mongoose.model('Donation', donationSchema);

module.exports = DonationModel;