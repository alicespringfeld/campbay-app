import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectDatabase(url: string) {
  client = new MongoClient(url);
  await client.connect();
}

export function getLocationCollection() {
  return client.db().collection('locations');
}

// export function getLocationByAttribute(attribute: string, search: string) {
//   const query = { [attribute]: search };
//   return getLocationCollection().find(query).toArray();
// }

// Get all Location if there's no searchrequest (fulltext search)

export function getLocationsBySearchQuery(search: string = '') {
  const query = { $text: { $search: search } };
  if (search) {
    return getLocationCollection().find(query).toArray();
  }
  return getLocationCollection().find().toArray();
}
