import dotenv from "dotenv";
dotenv.config();

export const appConfig = {
    port: process.env.APP_PORT || 5000,
    jwtAuthKey: process.env.JWT_KEY,
};

export const dbConfig = {
    url: process.env.DB_URL,
    dbName: process.env.DB_NAME
}