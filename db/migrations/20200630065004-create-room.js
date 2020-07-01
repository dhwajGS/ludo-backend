'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      isSignedIn: {
        type: Sequelize.BOOLEAN
      },
      roomName: {
        type: Sequelize.STRING
      },
      numberOfPlayers: {
        type: Sequelize.INTEGER
      },
      diceValue: {
        type: Sequelize.INTEGER
      },
      currentPlayer: {
        type: Sequelize.STRING
      },
      winner: {
        type: Sequelize.STRING
      },
      player_id: {
        type: Sequelize.ARRAY(Sequelize.STRING)
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Rooms');
  }
};