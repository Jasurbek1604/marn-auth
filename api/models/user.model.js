import mongoose from "mongoose";

const userSchma = new mongoose.Schema(
  {
    username: {
      Type: String,
      required: true,
      unique: true,
    },
    email: {
      Type: String,
      required: true,
      unique: true,
    },
    password: {
      Type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchma);

export default User;
