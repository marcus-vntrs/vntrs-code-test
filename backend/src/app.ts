import 'module-alias/register';
import express, { Request, Response } from 'express';
import cors from 'cors';
import {userRouter} from "@routes/user";
import {postRouter} from "@routes/post";

export default async () => {

  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  // Routes
  app.use('/users', userRouter());
  app.use('/posts', postRouter());
  app.get('/health', (_: Request, res: Response) => {
    res.status(200).send('ok');
  });

  return app;
};
