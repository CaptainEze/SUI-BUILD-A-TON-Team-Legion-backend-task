#!/usr/bin/env node
import http from "http";
import app from "../src";
import { appConfig } from "../config";

import dbConn from "../src/db/conn";

const server = http.createServer(app);

dbConn()
    .then((message) => {
        server.listen(appConfig.port, () => {
            console.log(`App on ${appConfig.port}`);
        });
    })
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
