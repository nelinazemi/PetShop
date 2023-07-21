import express from "express";
import { getAdmin, getAdminById, saveAdmin } from "../Controllers/AdminController.js";

const router = express.Router();

router.get("/logins/", getAdmin);
router.get("/logins/:id", getAdminById); 
router.post('/logins', saveAdmin);

export default router;
