import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import exampleRouter from './routes/exampleRouter';
import authRouter from './routes/authRouter';

dotenv.config();

class App {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(morgan('dev'));
  }

  private routes(): void {
    this.app.use('/auth', authRouter);
    this.app.use('/example', exampleRouter);
    
  }
}

export default new App().app;
