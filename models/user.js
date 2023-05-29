const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  membership_status: { type: Boolean },
  messages: [{ type: Schema.ObjectId, ref: "Message" }],
  password: {type: String, required: true}, //password hash
  admin: { type: Boolean }
});

// Virtual for this book instance URL.
UserSchema.virtual("url").get(function () {
  return "/user/" + this._id;
});

// Export model.
module.exports = mongoose.model("User", UserSchema);