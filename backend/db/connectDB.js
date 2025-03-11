import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    // Use the mongoose.connect() method to connect to the database
    // using the MONGO_URI environment variable
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
