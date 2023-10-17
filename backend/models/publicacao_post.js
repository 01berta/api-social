'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacao_Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Publicacao_Post.init({
    textoConteudo: DataTypes.STRING,
    dataDePublicacao: DataTypes.DATE,
    idUsuario: DataTypes.INTEGER,
    idCurtidas: DataTypes.INTEGER,
    idComentarios: DataTypes.INTEGER,
    idCompartilhamentos: DataTypes.INTEGER,
    idHashtags: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publicacao_Post',
  });
  return Publicacao_Post;
};