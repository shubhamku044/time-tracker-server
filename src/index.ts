import express from 'express';
import type { Request, Response, Express } from 'express';

const PORT = 8000;

const app: Express = express();

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({
    message: 'Server started'
  })
})

app.get('/health', (_: Request, res: Response) => {
  res.status(200).json({
    health: 'Up and running'
  })
})

app.listen(PORT, () => {
  console.log(`App is running on port: http://localhost:${PORT}`);
})
