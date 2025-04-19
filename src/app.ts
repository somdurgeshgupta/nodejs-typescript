import express from 'express';
import routes from './routes/index.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(express.json()); // Body parser

// Routes
app.use('/api', routes);

app.use(errorHandler);

export default app;
