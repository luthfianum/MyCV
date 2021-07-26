let express = require('express');
let router = express.Router();

router.get('/view/:username', function(req, res, next) {
  res.render('profile');
});

module.exports = router;
