"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes/routes"));
dotenv_1.default.config();
const options = {
    origin: "*",
    allowedHeaders: "Access-Control-Allow-Origin",
};
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.server = (0, express_1.default)(); // init the application
        this.middlewares();
        this.routes();
        this.configuration();
        this.cors();
    }
    middlewares() {
        /** Takes care of JSON data */
        this.server.use(express_1.default.json());
        /** Parse the request */
        this.server.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.server.use(routes_1.default, (req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            next();
        });
    }
    cors() {
        this.server.use((0, cors_1.default)(options));
    }
    configuration() {
        this.server.set("port", process.env.PORT || 3333);
    }
    start() {
        this.server.listen(this.server.get("port"), () => {
            console.log(`🏃 Server is listening ${this.server.get("port")} port.`);
        });
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map