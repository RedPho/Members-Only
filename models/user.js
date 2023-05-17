const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: [{ type: String, required: true }],
  username: { type: String, required: true },
  membership_status: { type: String, required: true },
  messages: [{ type: Schema.ObjectId, ref: "Message" }],
  password: {type: String, required: true} //password hash
});

// Virtual for this book instance URL.
UserSchema.virtual("url").get(function () {
  return "/user/" + this._id;
});

// Export model.
module.exports = mongoose.model("User", UserSchema);