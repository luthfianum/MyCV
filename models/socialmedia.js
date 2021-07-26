'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      //Associate With User
      SocialMedia.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id'
      })
    }
  };
  SocialMedia.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      reference: {
        model: 'Users',
        key: 'id'
      }
    },
    telegram: DataTypes.STRING,
    github: DataTypes.STRING,
    gitlab: DataTypes.STRING,
    whatsapp: DataTypes.STRING,
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SocialMedia',
  });
  return SocialMedia;
};