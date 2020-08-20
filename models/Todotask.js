const mongoose = require("mongoose");

const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Math.round(new Date(Date.now()).getTime() / 1000),
  },
});
module.exports = mongoose.model("TodoTask", todoTaskSchema);
