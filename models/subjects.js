const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const Subject = mongoose.model("Subject", subjcteSchema);

module.exports = Subject;