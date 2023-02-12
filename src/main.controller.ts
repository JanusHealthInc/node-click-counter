import express, { Express } from "express";
import { clickerService } from "./clicker.service";

export default class MainController {
  /**
   * Register controller routes
   *
   * @param {Express} app
   * @memberof MainController
   */
  register(app: Express): void {
    app.post("/user/clicks", (req: express.Request, res: express.Response) => {
      console.debug('POST /user/clicks', JSON.stringify(req.body))
      const clickCount = req.body.click_count;
      const totalClicks = clickerService.addClicks(clickCount);

      const responseObj = {
        click_count: totalClicks,
      };

      return res.send(responseObj);
    });

    app.get("/user/clicks", (req: express.Request, res: express.Response) => {
      console.debug('GET /user/clicks', JSON.stringify(req.body))
      const responseObj = {
        click_count: clickerService.getTotalClicks(),
      };
      return res.send(responseObj);
    });

    app.post(
      "/user/clicks/reset",
      (req: express.Request, res: express.Response) => {
        console.debug('POST /user/clicks/reset', JSON.stringify(req.body))
        const responseObj = {
          click_count: clickerService.resetTotalClicks(),
        };
        return res.send(responseObj);
      }
    );
  }
}
