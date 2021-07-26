'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserInterest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserInterest.belongsTo(models.User, {
        foreignKey: 'UserId',
        targetKey: 'id'
      })
      UserInterest.belongsTo(models.Interest, {
        foreignKey: 'InterestId',
        targetKey: 'id'
      })
    }
  };
  UserInterest.init({
    UserId: DataTypes.INTEGER,
    InterestId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserInterest',
  });
  return UserInterest;
};