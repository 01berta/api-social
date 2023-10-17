'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RespostasComentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RespostasComentario.init({
    idComentario: DataTypes.INTEGER,
    textoDaResposta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RespostasComentario',
  });
  return RespostasComentario;
};