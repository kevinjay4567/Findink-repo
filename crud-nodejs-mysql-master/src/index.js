import app from "./app.js";
import dontenv from "dotenv";
import http from "http";

dontenv.config({ path: "./.env" });

const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
serverHttp.on('listening', () =>
  console.info(
    `App running at http://${process.env.IP}:${process.env.HTTP_PORT}`
  )
);

/* app.listen(process.env.HTTP_PORT, () => {
  console.log(`server on port ${process.env.HTTP_PORT}`);
}); */
/* import express, { json } from "express";

const app = express();

app.use(json());
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
}) */