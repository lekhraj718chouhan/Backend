import dotenv from "dotenv";
import connectDB from "./db/index.js";

// 1. Load env variables immediately
dotenv.config({
    path: './.env'
});

// 2. Import app AFTER env is loaded
import { app } from "./app.js";

connectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`⚙️  Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
      console.error("MONGO db connection failed !!! ", err);
  });