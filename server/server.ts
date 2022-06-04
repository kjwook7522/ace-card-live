import express from "express";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ace_card", "kjwook7522", "3552", {
  host: "localhost",
  dialect: "mysql",
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connect();
});
