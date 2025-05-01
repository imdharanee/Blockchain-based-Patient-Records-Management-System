import { create } from "ipfs-http-client";

const ipfs = create({ host: "localhost", port: 5002, protocol: "http" });

export const uploadToIPFS = async (req, res) => {
    try {
        console.log("Request Headers: ", req.headers);
        const  data = req.body;

        console.log("The data is ....\n");
        const parsedData=JSON.stringify(data);

        
        if (!data) return res.status(400).json({ error: "No data provided" });

        const { path } = await ipfs.add(parsedData);
        res.json({ hash: path });
    } catch (error) {
        console.error("IPFS Upload Error:", error);
        res.status(500).json({ error: "IPFS upload failed" });
    }
};

export const getFromIPFS = async (req, res) => {
    try {
        const { hash } = req.params;
        if (!hash) return res.status(400).json({ error: "No hash provided" });

        let content = "";
        for await (const chunk of ipfs.cat(hash)) {
            content += chunk.toString();
        }
        res.json({ data: content });
    } catch (error) {
        console.error("IPFS Fetch Error:", error);
        res.status(500).json({ error: "Failed to retrieve data from IPFS" });
    }
};

