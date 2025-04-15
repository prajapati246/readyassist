import express from "express";
import { forgotPassword, login, logout, register, resetPassword } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);
router.post("/forgotPassword",forgotPassword);
router.post("/resetPassword",resetPassword);

export default router;
