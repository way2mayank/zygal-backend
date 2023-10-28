import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});


export default mongoose.model("User", Schema);

