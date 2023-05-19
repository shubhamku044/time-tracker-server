import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import type { Request, Response, Express } from 'express';

dotenv.config({ path: './.env.local' });

const PORT = process.env.PORT || 5500;

const app: Express = express();

app.use(morgan(':method :url :status :res[content - length] - :response - time ms'));

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({
    message: 'Server started successfully'
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
