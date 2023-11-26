import { MongoClient } from "mongodb";
let connectDB;
console.log("Connect", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(process.env.NODE_ENV).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(process.env.NODE_ENV).connect();
}
export { connectDB };
