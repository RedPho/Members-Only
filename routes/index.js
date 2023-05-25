var express = require('express');
var router = express.Router();
const message_controller = require("../controllers/messageController");
const user_controller = require("../controllers/userController");


/* GET home(messages) page. */
router.get('/', message_controller.message_list);


/* GET home page. */
router.get('/users', function (req, res, next) {
  res.render('user_list', { title: 'User List' });
});



router.get('/sign-up', user_controller.sign_up_get);
router.post('/sign-up', user_controller.sign_up_post);

router.get('/sign-in', user_controller.sign_in_get);
router.post("/sign-in", user_controller.sign_in_post);

router.get('/log-out', user_controller.log_out);

router.get('/join-club', user_controller.join_club_get);
router.post('/join-club', user_controller.join_club_post);


router.get('/new-message', message_controller.new_message_get);
router.post('/new-message', message_controller.new_message_post);



module.exports = router;
