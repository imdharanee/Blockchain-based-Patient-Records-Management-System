import { create } from "ipfs-http-client";
import dotenv from "dotenv";

dotenv.config();

const ipfs = create({ host: "localhost", port: 5002, protocol: "http" });


export default ipfs;
