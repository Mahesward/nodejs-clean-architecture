import { Express, Application } from 'express';
import todoRoutes from './todoRoutes.js';
import authRoutes from './authRoutes.js';

export default function routes(app: Application, express: any, configs) {
  app.use('/api/v1/user', authRoutes(express, configs));
  app.use('/api/v1/todo', todoRoutes(express, configs));
}
