import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "password is must required"],
    },
    watchHistory: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "video",
      },
    ],
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// pre hook:  data save hony se just pehly password encrypt krna
// yha pr arrow function nai use kia because we might need 'this' reference which arrow
// function does not provide
//  async await iss liye use kia because it might take time to encrypt password
// its middleware so we passed next flag

userSchema.pre("save", async function (next) {
  // agr password modify nahi he tu kia zarorat he issy bar bar save krwany ki
  if (this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10);
  next();
});

// how to add custom methods
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// custom method to generate access token
// ye fast hota he iss liye async ki zarorat nahi
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this.ObjectId,
      email: this.email,
      username: this.username,
      fullanme: this.fullanme,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// custom method to generate Referesh token
// ye fast hota he iss liye async ki zarorat nahi

// dono hi jwt token he usage ka diff he
userSchema.methods.generateRefereshToken = function () {
  // iss me hum thori info rakhtay he
  return jwt.sign(
    {
      _id: this.ObjectId,
    },
    process.env.REFERESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFERESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("user", userSchema);
