import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectionDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log("database connected");
  } catch (error) {
    console.log(`error occur is : ${error}`);
    process.exit(1);
  }
};
