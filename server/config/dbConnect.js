import mongoose from "mongoose";

const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI_DIGITAL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default dbConnect;
