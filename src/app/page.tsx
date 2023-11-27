import React from "react";
import { connectDB } from "../util/db";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("Devv");
  const a = await db.collection("test").find().toArray();
  console.log(a, "test");

  return <main>home</main>;
}
