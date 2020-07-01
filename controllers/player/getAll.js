import db from "../../db/models";

const { Player } = db.sequelize.models;
const playerController = {
  
  async getAll(req, res) {
    try {
      console.log(chalk.yellow("player contoller"));
      const playerList = await Player.findAll();
      return res.status(200).json(playerList);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
export default playerController;
