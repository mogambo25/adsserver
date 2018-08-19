'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING
      },
      updatedBy: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roles');
  }
};