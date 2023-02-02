'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cocktail.init({
    name: DataTypes.STRING,
    glass: DataTypes.STRING,
    ingredients: DataTypes.TEXT('long'),
    recipe: DataTypes.TEXT('long'),
    comments: DataTypes.TEXT('long'),
    image: DataTypes.STRING,
    createdAt: DataTypes.DATE(6),
		updatedAt: DataTypes.DATE(6),
		deletedAt: DataTypes.DATE(6),
  }, {
    sequelize,
    modelName: 'Cocktail',
    timestamps: true,
		paranoid: true,
  });
  return Cocktail;
};