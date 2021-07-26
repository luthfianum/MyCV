const model = require('../models');

const viewProfile = (req, res) => {
	model.User.findOne({
		where: {
			id: req.user.id
		},
		attributes: { 
			exclude: ['password','createdAt','updatedAt'] 
		},
		raw:true,
		nest:true,
		include: [
			{
				model: model.SocialMedia,
				as: 'SocialMedia',
				attributes: { 
					exclude: ['id','userId','createdAt','updatedAt'] 
				},
			},
		]
	}).then(user => {
		// Menginclude Interest ke User
		let data = [];
		return model.UserInterest.findAll({
			where: {
				UserId: req.user.id
			},
			include: {
				model: model.Interest,
				attributes: {
					exclude: ['id','createdAt','updatedAt']
				},
				raw: true
			},
			attributes: {
				exclude: ['createdAt','updatedAt']
			},
			raw:true,
			nest:true
		}).then(UserInterests => {
			for(UserInterest of UserInterests){
				data.push(UserInterest.Interest);
			}
			user.Interests = [...data];
			return user;
		}).catch(err => {
			console.log(err);
		})
	}).then(user => {
		return model.Project.findAll({
			where: {
				UserId: req.user.id
			},
			attributes: {
				exclude: ['id','UserId','createdAt','updatedAt']
			},
			raw:true
		}).then(Projects => {
			user.Projects = Projects
			return user
		}).catch(err => {
			console.log(err);
		})
	}).then(user => {
		console.log(user);
		res.render('profile', {data: user})
	}).catch(err => {
		console.log(err)
	})
}

module.exports = {
	viewProfile
}