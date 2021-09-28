import { createConnection } from "typeorm";
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

createConnection()
  .then(async (connection) => {
    console.log("💾 Connected to DB");
  })
  .catch((error) => console.log("❌ TypeORM connection error: ", error));
