module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define("Player", {
    playerId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    playerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerImage: DataTypes.STRING,
    currentPosition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tokenId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Player;
};

// SQL
// room has many player
// associations
// dia for db
// create user in db
// user model + migrations
