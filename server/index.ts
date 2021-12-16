import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import {
  connectDatabase,
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

// Get all locations and searched locations

app.get('/api/locations', async (request, response) => {
  const locations = await getLocationsBySearchQuery(
    request.query.search as string
  );
  if (locations) {
    response.send(locations);
  } else {
    response.status(404).send('This page is not here. Check another Castle 🏰');
  }
});

// Get a single location by attribute

app.get('/api/locations/search', async (request, response) => {
  const infrastructure = request.query.infrastructure;
  const landscape = request.query.landscape;
  const locations = await getLocationsBySearchQuery();
  const filteredLocations = locations.filter((location) => {
    if (
      location.infrastructure === infrastructure &&
      location.landscape === landscape
    ) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredLocations);
  response.json(filteredLocations);
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
    typeof newLocation.longitude !== 'number' ||
    typeof newLocation.imageUrl !== 'string' ||
    typeof newLocation.id !== 'number'
  ) {
    response.status(400).send('Missing properties');
    return;
  }
  // check if adress is already taken in our database
  const isLocationKnown = await locationCollection.findOne({
    locationAddress: newLocation.address,
  });
  if (isLocationKnown) {
    response.status(409).send(`${newLocation.address} already exists`);
  } else {
    locationCollection.insertOne(newLocation);
    response.send(`${newLocation.address} added`);
  }
});

// Delete a location
app.delete('/api/locations/:latitude', async (request, response) => {
  const locationCollection = getLocationCollection();
  const location = request.params.latitude;
  // const isLocationKnown = await locationCollection.findOne({
  //   latitude: locationLatitude,
  // });
  const deleteResult = await locationCollection.deleteOne({
    latitude: location,
  });
  if (deleteResult.deletedCount) {
    response.send('Delete successfull!');
  } else {
    response.status(404).send();
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
