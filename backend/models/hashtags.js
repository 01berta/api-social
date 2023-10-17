'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hashtags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hashtags.init({
    textoDaHastags: DataTypes.STRING,
    publicacoesRelacionadas: DataTypes.STRING,
    idHashtags: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hashtags',
  });
  return Hashtags;
};