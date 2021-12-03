import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectDatabase(url: string) {
  client = new MongoClient(url);
  await client.connect();
}

export function getLocationCollection() {
  return client.db().collection('locations');
}

export function getLocationByAttribute(attribute: string, search: string) {
  const query = { [attribute]: search };
  return getLocationCollection().find(query).toArray();
}
// @ts-ignore
export function getLocationsBySearchQuery(search: string) {
  const query = { $text: { $search: search } };
  return getLocationCollection().find(query).toArray();
}
