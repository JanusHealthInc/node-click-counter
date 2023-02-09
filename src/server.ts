import express, { Express } from "express";
import MainController from "./main.controller";
import http from "http";

export async function start() {
  const app: Express = express();
  const PORT = 3000;

  app.use(express.json());

  const httpServer = http.createServer(app);

  const controller = new MainController();
  controller.register(app);

  httpServer.listen(PORT, async () => {
    console.log(`listening at http://localhost:${PORT}`);
  });
}

void start();
