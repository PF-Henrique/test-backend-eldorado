import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import routes from "./app/routes/routes";

dotenv.config();

const options: cors.CorsOptions = {
  origin: "*",
  allowedHeaders: "Access-Control-Allow-Origin",
};

class App {
  public server: Express = express();

  constructor() {
    this.server = express(); // init the application
    this.middlewares();
    this.routes();
    this.configuration();
    this.cors();
  }

  public middlewares() {
    /** Takes care of JSON data */
    this.server.use(express.json());
    /** Parse the request */
    this.server.use(express.urlencoded({ extended: false }));
  }

  public routes() {
    this.server.use(routes, (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      next();
    });
  }

  public cors() {
    this.server.use(cors(options));
  }

  public configuration() {
    this.server.set("port", process.env.PORT || 3333);
  }

  public start() {
    this.server.listen(this.server.get("port"), () => {
      console.log(`🏃 Server is listening ${this.server.get("port")} port.`);
    });
  }
}

export default new App();
