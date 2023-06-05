import express,{Request, Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import AuthRoute from './routes/auth';

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

app.use('/auth', AuthRoute);

// Healthcheck endpoint
app.get('/', (req:Request, res:Response) => {
  res.status(200).send({ status: 'ok' });
});
