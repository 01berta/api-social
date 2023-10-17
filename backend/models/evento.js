'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Evento.init({
    idEvento: DataTypes.INTEGER,
    nomeDoEvento: DataTypes.STRING,
    descricao: DataTypes.STRING,
    dataehora: DataTypes.DATE,
    localizacao: DataTypes.STRING,
    idCriador: DataTypes.INTEGER,
    idParticipantes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};