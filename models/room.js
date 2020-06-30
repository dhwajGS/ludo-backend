module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    isSignedIn: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    roomId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfPlayers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    diceValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currentPlayer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    winner: DataTypes.STRING,
  });

  Room.associate = (models) => {
    Room.hasMany(models.Player, {
      foreignKey: "Player_playerId",
    });
  };
  return Room;
};
