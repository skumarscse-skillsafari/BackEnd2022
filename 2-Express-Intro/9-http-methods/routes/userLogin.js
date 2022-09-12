import express from "express";
import { getLoginUser } from "../controllers/userLogin.js";
const router = express.Router();

router.get("/", getLoginUser);

export default router;
