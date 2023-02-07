import express from "express";
import { router } from "./routes";
import { AppDataSource } from "./database/data-source";

const app = express();

app.use(express.json());
app.use(router);

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection established !");
  })
  .catch((error) => console.log(error));

export { app };
