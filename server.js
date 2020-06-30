 import { sequelize } from "./models";
const express = require("express");
import { Player } from './models/player'
const PORT = 3000;
const app = express();

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Application is running on port" + PORT);
    console.log('sequelize', sequelize.models.Player)
    sequelize.models.Player.create({
      playerId: "10",
      playerName: "Dhwaj",
      currentPosition: "R1",
      tokenId: "R1",
      color: "red",
    }).then((player) => console.log('player', player))
    .catch(error => console.log('error', error))
  });
});

