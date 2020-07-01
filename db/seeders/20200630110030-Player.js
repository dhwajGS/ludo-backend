"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Players",
      [
        {
          playerName: "Alpha",
          playerImage: "abhi to nhi h",
          currentPosition: "R1",
          tokenId: "R1",
          color: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerName: "Beta",
          playerImage: "abhi bhi nhi h",
          currentPosition: "R2",
          tokenId: "R2",
          color: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerName: "Gamma",
          playerImage: "nhi h",
          currentPosition: "R3",
          tokenId: "R3",
          color: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerName: "Delta",
          playerImage: "nhi h",
          currentPosition: "R4",
          tokenId: "R4",
          color: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerName: "A",
          playerImage: "abhi to nhi h",
          currentPosition: "G1",
          tokenId: "G1",
          color: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerName: "B",
          playerImage: "abhi bhi nhi h",
          currentPosition: "G2",
          tokenId: "G2",
          color: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerName: "C",
          playerImage: "nhi h",
          currentPosition: "G3",
          tokenId: "G3",
          color: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          playerName: "D",
          playerImage: "nhi h",
          currentPosition: "G4",
          tokenId: "G4",
          color: "green",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Players", null, {});
  },
};
