import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { connectDatabase, getLocationCollection } from './database';

if (!process.env.MONGODB_URI) {
  throw new Error('No MongoDB URL env variable');
}

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

app.use(express.static('dist'));

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from the other side!' });
});

// Get all locations
app.get('/api/locations/', async (_request, response) => {
  const locationCollection = getLocationCollection();
  const cursor = locationCollection.find();
  const allLocations = await cursor.toArray();
  response.send(allLocations);
});

// Add a new location
app.post('/api/locations', async (request, response) => {
  const locationCollection = getLocationCollection();
  // check if properties are complete
  const newLocation = request.body;
  if (
    typeof newLocation.address !== 'string' ||
    typeof newLocation.landscape !== 'string' ||
    typeof newLocation.infrastructure !== 'string'
  ) {
    response.status(400).send('Missing properties');
    return;
  }
  // check if username is already taken in our database
  const isLocationKnown = await locationCollection.findOne({
    username: newLocation.address,
  });
  if (isLocationKnown) {
    response.status(409).send(`${newLocation.address} already exists`);
  } else {
    locationCollection.insertOne(newLocation);
    response.send(`${newLocation.address} added`);
  }
});

// Handle client routing, return all requests to the app
app.get('*', (_request, response) => {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
