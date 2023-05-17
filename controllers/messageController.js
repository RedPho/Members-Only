const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Message = require("../models/message");


exports.message_list = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find({}).populate("user").sort({timestamp: 1}).exec();
  res.render("index", {title: "All Messages", all_messages: allMessages});
})