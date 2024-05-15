

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { connectDB } from "./db";
import { PORT } from "./config";
import { router } from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB()
  .then(() => {
    app.use(router);

    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to the database:", err);
    process.exit(1); // Exit with failure code
  });
