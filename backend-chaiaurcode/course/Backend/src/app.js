import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
); // form wegera se data leny k liye configuration

app.use(express.urlencoded({ extended: true, limit: "16kb" })); // URL se data leny k liye configuration

app.use(express.static("public"));

app.use(cookieParser());

export default app;
