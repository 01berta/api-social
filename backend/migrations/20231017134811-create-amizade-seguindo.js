'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AmizadeSeguindos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSeguidor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Usuarios', key: 'id'},
        onDelete: 'CASCADE'
      },
      idSeguido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Usuarios', key: 'id'},
        onDelete: 'CASCADE'
      },
      dataDeincio: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('AmizadeSeguindos');
  }
};