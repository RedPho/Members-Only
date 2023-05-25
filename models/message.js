const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true },
  user: { type: Schema.ObjectId, ref: "User" },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

// Virtual for this book instance URL.
MessageSchema.virtual("url").get(function () {
  return "/message/" + this._id;
});

// Export model.
module.exports = mongoose.model("Message", MessageSchema);