import userModel from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// [GET]
export const getPost = (req, res) => {
  res.send("Router success !!!");
};
