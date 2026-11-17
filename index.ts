// index.ts
import express from 'express';
import webRoutes from './routes/web.js';

const app = express();
const port = 3000;

app.use(express.json());

// Register web routes group
app.use('/', webRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});