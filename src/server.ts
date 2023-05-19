import app from './app.js';
import dotenv from 'dotenv';
import pkg from 'pg';
import type { Request, Response } from 'express';

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;

const { Pool } = pkg;

const pool = new Pool({
  user: 'shubham',
  host: 'localhost',
  database: 'mydatabase',
  password: 'helloworld',
  port: 5432
});


app.get('/', (_: Request, res: Response) => {
  res.status(200).json({
    message: 'Server started successfully',
    msg: 'connecting to database',
    error: 'Removed the error'
  });
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  res.status(200).json({
    msg: 'Data received'
  });
});

app.get('/health', (_: Request, res: Response) => {
  res.status(200).json({
    health: 'Up and running'
  });
});

app.get('/test', (_: Request, res: Response) => {
  res.status(200).json({
    health: 'started the development server using docker'
  });
});

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
});
