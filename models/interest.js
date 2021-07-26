'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Associate With UserInterest & User
      Interest.belongsToMany(models.User, {
        through: models.UserInterest
      })
      Interest.hasMany(models.UserInterest, {
        foreignKey: 'InterestId'
      })
    }
  };
  Interest.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Interest',
  });
  return Interest;
};