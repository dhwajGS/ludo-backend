import { sequelize } from "./db/models";
import chalk from "chalk";
import express from "express";
import router from "./routes";
const PORT = 3000;
const app = express();
app.use("/", router);
const connect = async () => {
  try {
    console.log(chalk.blue("Sync in progress"))
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(chalk.yellow("Application is running on port " + PORT))
    );
  } catch (error) {
    console.log(chalk.yellow("error", error));
  }
};
connect();
