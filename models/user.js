'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Associate With UserInterest & Interest
      User.belongsToMany(models.Interest, {
        through: models.UserInterest
      })
      User.hasMany(models.UserInterest, {
        foreignKey: 'UserId'
      })

      //Associate With SocialMedia
      User.hasOne(models.SocialMedia, {
        foreignKey: 'userId',
        as: 'SocialMedia'
      });

      //Associate With Project
      User.hasMany(models.Project, {
        foreignKey: 'UserId'
      })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};