import Router from "express";
import registerUser from "../controllers/user.controllers.js";

const Userrouter = Router();

Userrouter.route("/register").post(registerUser);

export default Userrouter;
