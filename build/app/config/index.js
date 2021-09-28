"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
dotenv_1.default.config();
(0, typeorm_1.createConnection)()
    .then(async (connection) => {
    console.log("💾 Connected to DB");
})
    .catch((error) => console.log("❌ TypeORM connection error: ", error));
//# sourceMappingURL=index.js.map