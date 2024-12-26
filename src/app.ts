import cors from 'cors';
import express, { Application } from 'express';
import router from './app/routes';
import globalErrorHandler from './app/middlwares/globalErrorHandler';
import notFound from './app/middlwares/notFound';
const app: Application = express();

//parsers
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://anamulportfolio.netlify.app', 'https://admin-anamulportfolio.netlify.app'],
    credentials: true,
  })
);
app.use('/api/v1', router);

app.use(globalErrorHandler);

//not Found
app.use(notFound);

export default app;
