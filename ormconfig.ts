import * as dotenv from "dotenv";
dotenv.config();

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

export default {
  "type": "mysql",
  "host": DB_HOST,
  "port": DB_PORT,
  "username": DB_USERNAME,
  "password":  DB_PASSWORD,
  "database": DB_DATABASE,
  "entities": ["./src/models/**.ts"],
  "migrations": ["./src/database/migrations/**.ts"],
  "cli": { "migrationsDir": "./src/database/migrations" }
}