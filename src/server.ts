import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string)
  .then((data) => {
    console.log("mognodb connected successfully");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is runnig successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("error on connection mongodb", err));
