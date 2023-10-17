'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publicacao_Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPublicacao: {
        type: Sequelize.INTEGER
      },
      textoConteudo: {
        type: Sequelize.STRING
      },
      dataDePublicacao: {
        type: Sequelize.DATE
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      idCurtidas: {
        type: Sequelize.INTEGER
      },
      idComentarios: {
        type: Sequelize.INTEGER
      },
      idCompartilhamentos: {
        type: Sequelize.INTEGER
      },
      idHashtags: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Publicacao_Posts');
  }
};