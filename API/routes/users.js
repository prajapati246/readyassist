import express from "express";
import { getUser, updateUser,changePassword} from "../controllers/user.js";

const router = express.Router();

router.get("/find/:userId", getUser);
router.put("/", updateUser);
router.put("/changePassword",changePassword);
export default router;