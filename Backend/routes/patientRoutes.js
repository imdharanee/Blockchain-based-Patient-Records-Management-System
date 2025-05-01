import express from "express";
import { addPatientRecord,getPatientRecord } from "../controllers/patientController.js"

const router = express.Router();
router.post("/add", addPatientRecord);
router.get("/:patientId", getPatientRecord);

export default router;
