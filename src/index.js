//  require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ 
    path: "./env" 
});


connectDB()





// Approch 1

// import express from "express";
// const app = express();

// (async () => {
//   try {
//     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Failed to connect to MongoDB", error);
//       throw error; 
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//     throw error; 
//   }
// })();