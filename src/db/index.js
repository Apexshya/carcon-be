

import mongoose from "mongoose";
import { postSchema, userSchema } from "./schema.js";

const mongoDbURI = "mongodb://localhost:27017/lec"; // db connection string

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit with failure code
  }
};

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

export {
  connectDB,
  User,
  Post
};
