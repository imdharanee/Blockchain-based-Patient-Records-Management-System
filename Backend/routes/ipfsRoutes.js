import express from "express";
import { uploadToIPFS, getFromIPFS } from "../controllers/ipfsController.js"

const router = express.Router();

router.post("/upload", uploadToIPFS);
router.get("/:hash", getFromIPFS);

export default router;
