const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Project ||
  mongoose.model("Project", projectSchema);
