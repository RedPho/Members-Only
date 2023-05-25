const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Message = require("../models/message");


exports.message_list = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find({}).populate("user").sort({timestamp: 1}).exec();
  res.render("index", { title: "All Messages", all_messages: allMessages });
})

exports.new_message_get = (req, res, next) => {
  res.render("new_message_form", {title: "New Message"});
}

exports.new_message_post = asyncHandler(async(req, res, next) => {
  const message = new Message({title: req.body.title, text: req.body.message, user: req.user.id});
  const result = await message.save();
  res.redirect('/');
})