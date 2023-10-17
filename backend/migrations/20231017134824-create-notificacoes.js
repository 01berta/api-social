'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Notificacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNotificacoes: {
        type: Sequelize.INTEGER
      },
      tipoDaNotificacoes: {
        type: Sequelize.STRING
      },
      remetente: {
        type: Sequelize.STRING
      },
      destinario: {
        type: Sequelize.STRING
      },
      dataDaNotificacao: {
        type: Sequelize.STRING
      },
      idComentario: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Notificacoes');
  }
};