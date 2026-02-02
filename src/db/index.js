import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // MUST have .js extension

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // Fixed the ${} syntax below
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB;