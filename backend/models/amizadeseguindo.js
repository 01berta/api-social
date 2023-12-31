'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AmizadeSeguindo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AmizadeSeguindo.init({
    idSeguidor: DataTypes.INTEGER,
    idSeguido: DataTypes.INTEGER,
    dataDeincio: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AmizadeSeguindo',
  });
  return AmizadeSeguindo;
};