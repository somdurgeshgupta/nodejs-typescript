import express from 'express';
import cors from 'cors';
import routes from './routes/index.routes';
import { errorHandler } from './middleware/error.middleware';

const app = express();

// Enable CORS for all origins
app.use(cors());

// Or you can customize:
// app.use(cors({
//   origin: ['http://localhost:3000', 'https://yourdomain.com'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
// }));

app.use(express.json());
app.use('/api', routes);

// Error handler
app.use(errorHandler);

export default app;
