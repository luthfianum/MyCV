let express = require('express');
let router = express.Router();

router.get('/view/:username', function(req, res, next) {
  res.render('profile');
});

router.get('/', function(req, res, next) {
  res.redirect('/auth/login');
});
module.exports = router;
