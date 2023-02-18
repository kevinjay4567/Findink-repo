import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
const result = dotenv.config({path: './.env'});

export const pool = createPool({
  host: result.parsed.DB_HOST,
  user: result.parsed.DB_USERNAME,
  password: result.parsed.DB_PASSWORD,
  port: result.parsed.DB_PORT,
  database: result.parsed.DB_DATABASE,
});
