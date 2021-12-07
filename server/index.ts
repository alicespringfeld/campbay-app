import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import {
  connectDatabase,
  getLocationByAttribute,
  getLocationCollection,
  getLocationsBySearchQuery,
} from './database';

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

// Get all locations and searched locations

app.get('/api/locations', async (request, response) => {
  // const locationCollection = getLocationCollection();
  // const cursor = locationCollection.find();
  // const allLocations = await cursor.toArray();
  // response.send(allLocations);
  const locations = await getLocationsBySearchQuery(
    request.query.search as string
  );
  console.log(locations);
  if (locations) {
    response.send(locations);
  } else {
    response.status(404).send('This page is not here. Check another Castle 🏰');
  }
});

//Get a single location by searchQuery

// app.get('/api/locations/search', async (request, response) => {
//   const locations = await getLocationsBySearchQuery(
//     request.query.search as string
//   );
//   console.log(locations);
//   if (locations) {
//     response.send(locations);
//   } else {
//     response.status(404).send('This page is not here. Check another Castle 🏰');
//   }
// });

// Get a single location by attribute

app.get('/api/locations/:type/:value', async (request, response) => {
  const location = await getLocationByAttribute(
    request.params.type,
    request.params.value
  );

  if (location) {
    response.send(location);
  } else {
    response.status(404).send('This page is not here. Check another Castle 🏰');
  }
});

// Add a new location
app.post('/api/locations', async (request, response) => {
  const locationCollection = getLocationCollection();
  // check if properties are complete
  const newLocation = request.body;
  if (
    typeof newLocation.address !== 'string' ||
    typeof newLocation.landscape !== 'string' ||
    typeof newLocation.infrastructure !== 'string' ||
    typeof newLocation.latitude !== 'number' ||
    typeof newLocation.longitude !== 'number'
  ) {
    response.status(400).send('Missing properties');
    return;
  }
  // check if adress is already taken in our database
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

// Delete a location
app.delete('/api/locations/:coordinates', async (request, response) => {
  const locationCollection = getLocationCollection();
  const locationCoordinates = request.params.coordinates;
  const isLocationKnown = await locationCollection.findOne({
    coordinates: locationCoordinates,
  });
  if (!isLocationKnown) {
    response
      .status(404)
      .send("Location doesn't exist. Check another Castle 🏰");
    return;
  } else {
    locationCollection.deleteOne({ coordinates: locationCoordinates });
    response.send('Deleted');
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
