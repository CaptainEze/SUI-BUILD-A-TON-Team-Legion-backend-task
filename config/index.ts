import dotenv from "dotenv";
dotenv.config();
import { AppConfig } from "./types";

export const appConfig: AppConfig = {
    port: process.env.APP_PORT || 5000,
    jwtSecret: process.env.JWT_KEY || "insecure",
    jwtExpiry: "1d",
};

export const dbConfig = {
    url: process.env.DB_URL,
    dbName: process.env.DB_NAME,
};
