import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.disable("x-powered-by");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});
app.use("/api/v1", router);

export default app;
