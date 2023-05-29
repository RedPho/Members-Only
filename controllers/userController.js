const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require('bcryptjs');
const passport = require('passport');


exports.sign_up_get = asyncHandler(async (req, res, next) => {
  res.render('sign_up_form', { title: "Sign Up" });
})

exports.sign_up_post = asyncHandler(async (req, res, next) => {
  bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
    const user = new User({
      username: req.body.username,
      password: hashedPassword
    });
    const result = await user.save();
    res.redirect("/");
  });
})

exports.sign_in_get = async (req, res, next) => {
  res.render('sign_in_form', { title: "Sign In" })
}

exports.sign_in_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/"
})

exports.log_out = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  })
};

exports.join_club_get = (req, res, next) => {
  res.render('join_club', { title: "Join The Club" });
}

exports.join_club_post = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.MEMBERSHIP_KEY) {
    await User.findByIdAndUpdate(req.user.id, { membership_status: true }).exec();
  }
  else {
    res.render('join_club', { title: "Join The Club", err: "Key is incorrect" })
  }
  res.redirect('/');
});

exports.be_admin_get = (req, res, next) => {
  res.render('be_admin', { title: "Be Admin" });
}

exports.be_admin_post = asyncHandler(async (req, res, next) => {
  if (req.body.key == process.env.ADMIN_KEY) {
    await User.findByIdAndUpdate(req.user.id, { admin: true }).exec();
  }
  else {
    res.render('be_admin', { title: "Be Admin", err: "Key is incorrect" })
  }
  res.redirect('/');
});