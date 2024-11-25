import express from "express";
import dotenv from "dotenv";
import routes from "./Routes/index.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.use(routes);

export default app;
