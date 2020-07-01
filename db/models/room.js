"use strict";
const roomInfo = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    isSignedIn: DataTypes.BOOLEAN,
    roomName: DataTypes.STRING,
    numberOfPlayers: DataTypes.INTEGER,
    diceValue: DataTypes.INTEGER,
    currentPlayer: DataTypes.STRING,
    winner: DataTypes.STRING,
    player_id: DataTypes.ARRAY(DataTypes.STRING),
  });
  // Room.associate = (models) => {
  //   Room.hasMany(models.Player, {
  //     foreignKey: "playerId",
  //     as: 'player',
  //   });
  // };
  return Room;
};
export default roomInfo;
