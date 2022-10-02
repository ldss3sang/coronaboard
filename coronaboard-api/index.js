import "dotenv/config";
import express from "express";
import globalStatController from "./controller/global-stat.controller";
import keyValueController from "./controller/key-value.controller";
import db from "./database";

const launchServer = async () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Hello Corona Board~!" });
  });

  app.get("/global-stats", globalStatController.getAll);
  app.post("/global-stats", globalStatController.insertOrUpdate);
  app.delete("/global-stats", globalStatController.remove);

  app.get("/key-value/:key", keyValueController.get);
  app.post("/key-value", keyValueController.insertOrUpdate);
  app.delete("/key-value/:key", keyValueController.remove);

  try {
    await db.sequelize.sync();
    console.log("Database is ready~!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error);
    process.exit(1);
  }

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};

launchServer();
