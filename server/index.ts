import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
//import path from 'path';
import { connectDatabase } from './database';

if (!process.env.MONGODB_URL) {
  throw new Error('No MongoDB URL dotenv variable');
}

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from the other side!' });
});

// Handle client routing, return all requests to the app
//app.get('*', (_request, response) => {
// response.sendFile(path.join(__dirname, '../dist/index.html'));
//});

connectDatabase(process.env.MONGODB_URL).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
