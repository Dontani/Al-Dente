const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
 comment:{
    type: String,
    required:true,
 },
  likes: {
    type: Number,
    required: true,
  },
  patients: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patients",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comments", CommentSchema);
