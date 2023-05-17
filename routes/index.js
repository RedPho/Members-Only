var express = require('express');
var router = express.Router();
const message_controller = require("../controllers/messageController");
const user_controller = require("../controllers/userController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/messages');
});

/* GET home page. */
router.get('/users', function(req, res, next) {
  res.render('user_list', { title: 'User List' });
});

router.get('/messages', message_controller.message_list)

module.exports = router;
