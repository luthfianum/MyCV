let express = require('express');
let router = express.Router();
let controller = require('../controllers/authControllers')

router.get('/login', controller.viewLogin);

router.post('/login', controller.login);

router.get('/register', controller.viewRegister);

router.post('/register', controller.register);

router.get('/logout', controller.logout);

module.exports = router;
