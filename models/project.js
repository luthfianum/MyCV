'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Associate with User
      Project.belongsTo(models.User,{
        foreignKey: 'UserId',
        targetKey: 'id'
      })
    }
  };
  Project.init({
    UserId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    client: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM('Mini Project','Course Project','Job Project'),
      defaultValue: 'Mini Project'
    },
    completion: {
      type: DataTypes.ENUM('Completed','Delayed','Failed','Progress'),
      defaultValue: 'Progress'
    },
    technologies: DataTypes.ARRAY(DataTypes.STRING),
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};