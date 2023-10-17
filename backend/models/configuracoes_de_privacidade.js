'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Configuracoes_de_Privacidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Configuracoes_de_Privacidade.init({
    idPrivacidade: DataTypes.INTEGER,
    visibilidadeDoPerfil: DataTypes.STRING,
    publicacoes: DataTypes.INTEGER,
    informacoesPessoais: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Configuracoes_de_Privacidade',
  });
  return Configuracoes_de_Privacidade;
};