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
        type: Sequelize.DATE
      },
      idComentario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Comentarios', key: 'id'},
        onDelete: 'CASCADE'
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Usuarios', key: 'id'},
        onDelete: 'CASCADE'
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