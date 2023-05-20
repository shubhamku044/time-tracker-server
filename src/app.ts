import express from 'express';
import morgan from 'morgan';
import type { Express, Request, Response } from 'express';
import { viewRouter, projectRouter, userRouter } from './app/routes/index.js';

const app: Express = express();

app.use(morgan('tiny'));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Routes
app.use('/', viewRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/users', userRouter);

app.get('/health', (_: Request, res: Response) => {
  res.status(200).json({
    health: 'Up and running'
  });
});

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    msg: `Can't find the ${req.originalUrl} in this server`
  });
});

export default app;
