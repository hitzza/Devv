import { MongoClient } from "mongodb";

let connectDB;

const dbUrl = process.env.NEXT_PUBLIC_DB_URL
  ? process.env.NEXT_PUBLIC_DB_URL
  : "";
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(dbUrl).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(dbUrl).connect();
}
export { connectDB };
