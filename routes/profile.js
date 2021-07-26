let express = require('express');
let router = express.Router();
let { isAuthenticated } = require('../middlewares/isAuthenticated')
let controller = require('../controllers/profileControllers')

router.get('/', controller.viewProfile);

module.exports = router;