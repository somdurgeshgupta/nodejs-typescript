import express from 'express';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

app.use(express.json()); // Body parser

// Routes
app.use('/api', userRoutes);

app.use(errorHandler);

export default app;
