const mongoose = require("mongoose");

// POST SCHEMA FOR VALIDATION
const faqSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },

  answer: {
    type: String,
    required: true,
    trim: true,
  },

  name: {
    type: String,
  },

  creator: {
    type: String,
    required: true,
    trim: true,
  },

  category: [String],

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Faqs", faqSchema);

