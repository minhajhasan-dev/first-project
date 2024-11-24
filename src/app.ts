import cors from 'cors';
import express, { Application } from 'express';
import { StudentRoutes } from './modules/student/student.route';
const app: Application = express();
// const port = 3000;

//parser user kori
app.use(express.json());
app.use(
  cors({
    origin: '*',
  }),
);

// application routes
app.use('/api/v1/students', StudentRoutes);

app.get('/');

export default app;
