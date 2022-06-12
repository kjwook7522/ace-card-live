import express from "express";
import dotenv from "dotenv";
import { Sequelize } from "sequelize";

const isProduction = process.env.NODE_ENV === "production";

function loadEnv(): void {
  dotenv.config({ path: "./config/.env" });

  if (isProduction) {
    dotenv.config({ path: "./config/.env.production" });
  } else {
    dotenv.config({ path: "./config/.env.development" });
  }
}

async function mysqlConnect() {
  const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

function createServer(): void {
  const app = express();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(parseInt(process.env.APP_PORT), process.env.APP_HOST, () => {
    mysqlConnect();
  });
}

loadEnv();
createServer();
