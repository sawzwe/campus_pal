// const mongoose = require("mongoose");

// const MONGODB_URI = process.env.MONGODB_URI; // Ensure you have your MongoDB URI stored in your environment variables

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the MONGODB_URI environment variable inside .env.local"
//   );
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectMongoDB() {
//   if (cached.conn) {
//     console.log("Using existing connection");
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     };

//     cached.promise = mongoose
//       .connect(MONGODB_URI, opts)
//       .then((mongoose) => {
//         console.log("CONNECTED TO MONGODB");
//         return mongoose;
//       })
//       .catch((err) => {
//         console.error("Failed to connect to MongoDB", err);
//         throw err; // Rethrow or handle as needed
//       });
//   }

//   try {
//     cached.conn = await cached.promise;
//     return cached.conn;
//   } catch (err) {
//     console.error("Failed to establish a connection", err);
//     throw err; // Ensure the error is not silently ignored
//   }
// }

// module.exports = connectMongoDB;

import mongoose from "mongoose";

const connectMongoDB = async () => {
  // Mongoose Connection States: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
  if (mongoose.connection.readyState === 1) {
    console.log("Already connected to MongoDB.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectMongoDB;
