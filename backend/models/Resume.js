const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  template: {
    type: String,
    default: 'modern'
  },
  personalInfo: {
    fullName: { type: String, required: true },
    jobTitle: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    summary: { type: String }
  },
  experience: [{
    company: { type: String },
    position: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String }
  }],
  education: [{
    institution: { type: String },
    degree: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    description: { type: String }
  }],
  skills: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Resume', resumeSchema);
