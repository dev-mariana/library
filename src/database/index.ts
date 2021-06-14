import * as dotenv from "dotenv";
import mysql from "mysql2";
import { Connection, createConnection } from "typeorm";
dotenv.config();

const { DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

export default async (): Promise<Connection> => {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: 3310,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  });

  connection.connect((error) => {
    if (error) throw error;
    console.log("Connected!");
  });

  return createConnection();
};