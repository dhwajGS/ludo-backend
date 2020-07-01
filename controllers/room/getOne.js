import db from "../../db/models";
import chalk from 'chalk'
const { Room, Player } = db.sequelize.models;
const roomController = {
  async getOne(req, res) {
    const roomName = req.params.room;
    try {
      console.log(chalk.blue('Query for Room '))
      const room = await Room.findOne({
        where: { roomName: roomName },
        // include: [
        //   {
        //     model: Player,
        //   },
        // ],
      });
      console.log(chalk.blue('Query for Players'))
      const players = await Player.findAll({
        where: { id: Object.values(room.dataValues.player_id) },
      });
      room.dataValues.player_id = players;
      return res.status(200).json(room);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
export default roomController;
