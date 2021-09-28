import dotenv from "dotenv";
import app from "./app";
import "reflect-metadata";
import "./app/config/index";

dotenv.config();

app.start();
