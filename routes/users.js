var express = require('express');
var router = express.Router();
const model = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
	
	res.send("okeh")
});

module.exports = router;
