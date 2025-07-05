import app from "./app.js";
import dotenv from "dotenv";
import { connectionDB } from "./db/db.js";

const port = process.env.PORT;

dotenv.config({
  path: "./env",
});

connectionDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
