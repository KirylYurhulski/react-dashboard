// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors'
import { router } from '../routers'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 7000;

app.use(cors())
app.use('/api', router)
app.use(express.json())

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});