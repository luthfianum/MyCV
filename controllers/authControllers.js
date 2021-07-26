let passport = require('passport');
let { User } = require('../models');

const viewLogin = (req, res) => {
	if (req.isAuthenticated()){
        res.redirect('/profile')
    }else{
        res.render('login')
    }
}

const login = (req, res) => {
	passport.authenticate("local",{ 
            successRedirect :'/profile',
            failureRedirect:'/auth/login',
            failureFlash:true
    	})(req, res);
}

const viewRegister = (req, res) => {
	if (req.isAuthenticated()){
        res.redirect('/profile')
    }else{
        res.render('register')
    }
}

const register = (req, res) => {
	User.create({
  		username: req.body.username,
  		password: req.body.password,
  		email: req.body.email 
  	}, {
  		raw: true
  	}).then(user => {
  		res.redirect('/auth/login')
  	}).catch(err => {
  		res.render('register')
  	})
}

const logout = (req, res) => {
	req.logout();
  res.redirect('/auth/login');
}

module.exports = {
	viewLogin,
	viewRegister,
	register,
	login,
	logout
};