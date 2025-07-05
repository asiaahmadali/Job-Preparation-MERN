import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    watchHistory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "video",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
