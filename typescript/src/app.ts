import express from 'express';
import taskController from './taskController';
import { errorHandler } from './errorHandler';


const app = express();
app.use(express.json());
app.use('/api', taskController);
app.use(errorHandler);

export default app;