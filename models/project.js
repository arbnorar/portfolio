const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create project schema and model
const ProjectSchema = new Schema({
  title: {
    type: String,
    required: [true, "Project title is required."],
  },
  description: {
    type: String,
    required: [true, "Project description is required."],
  },
  sourcecode: {
    type: String,
    required: [true, "Source code is required"],
  },
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;
