import express from 'express';
import morgan from 'morgan';
import dontenv from 'dotenv';
import cors from 'cors';

dontenv.config({ path: './.env' });
/* import path from "path"; */
/* import { port } from "./config.js"; */

import customerRoutes from './routes/customer.routes.js';

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}
/* import { fileURLToPath } from "url"; */

const app = express();

/* const __dirname = path.dirname(fileURLToPath(import.meta.url)); */
app.use(morgan('dev'));
app.use(express.json());

/* // settings
app.set("port", 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs"); */

// middlewares
/* app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); */

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Findink api' });
});
app.use('/api', cors(corsOptions), customerRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});
// static files
/* app.use(express.static(path.join(__dirname, "public"))); */

// starting the server
export default app;
