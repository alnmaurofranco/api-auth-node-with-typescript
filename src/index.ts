import "reflect-metadata";
import express from "express";

import "./database/connection";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("🔥 Servidor iniciado em https://localhost:3333");
});
