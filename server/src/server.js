import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./route/route.js";
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
 

mongoose
  .connect("mongodb+srv://way2mayankshri:7cmAMz38brCVTCHF@mern-project.iknrbkg.mongodb.net/zygal?retryWrites=true&w=majority", {})
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => console.error(error.message));

  app.use('/', router)

app.listen(4000 || process.env.PORT, () => {
  console.log("server is running on port 4000");
});
