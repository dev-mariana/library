import "reflect-metadata";
import express from 'express';
import createConnection from './database';
import { router } from './routes/routes';
import connection from "./database";

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };