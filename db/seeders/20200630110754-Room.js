"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Rooms",
      [
        {
          isSignedIn: true,
          roomName: "123",
          numberOfPlayers: 4,
          diceValue: 6,
          currentPlayer: "R1",
          winner: "null",
          player_id: ["1","2","3"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          isSignedIn: true,
          roomName: "123456",
          numberOfPlayers: 2,
          diceValue: 2,
          currentPlayer: "R3",
          winner: "null",
          player_id: ["29","30"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Rooms", null, {});
  },
};




