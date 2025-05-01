import express from "express";
import dotenv from "dotenv";
import ipfsRoutes from "./routes/ipfsRoutes.js"
import patientRoutes from "./routes/patientRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/patient", patientRoutes);
app.use("/api/ipfs", ipfsRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

