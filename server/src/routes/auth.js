import express from "express";
import { getPost } from "../controllers/authController";

const router = express.Router();

router.get("/", getPost);

export default router;
