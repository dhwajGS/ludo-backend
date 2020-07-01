"use strict";
import chalk from 'chalk'
const playerInfo = (sequelize, DataTypes) => {
  console.log(chalk.yellow('Models running'))
  const Player = sequelize.define("Player", {
    playerName: DataTypes.STRING,
    playerImage: DataTypes.STRING,
    currentPosition: DataTypes.STRING,
    tokenId: DataTypes.STRING,
    color: DataTypes.STRING,
  });
  return Player;
};

export default playerInfo;
