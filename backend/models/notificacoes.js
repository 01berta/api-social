'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notificacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notificacoes.init({
    idNotificacoes: DataTypes.INTEGER,
    tipoDaNotificacoes: DataTypes.STRING,
    remetente: DataTypes.STRING,
    destinario: DataTypes.STRING,
    dataDaNotificacao: DataTypes.STRING,
    idComentario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notificacoes',
  });
  return Notificacoes;
};