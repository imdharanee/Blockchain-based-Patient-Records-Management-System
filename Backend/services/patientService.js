import contract from "../config/blockchainConfig.js";
import ipfs from "../config/ipfsConfig.js";

const uploadToIPFS = async (data) => {
    const { cid } = await ipfs.add(JSON.stringify(data));
    return cid.toString();
};

const fetchFromIPFS = async (ipfsHash) => {
    const stream = ipfs.cat(ipfsHash);
    let data = "";
    for await (const chunk of stream) {
        data += chunk.toString();
    }
    return JSON.parse(data);
};

const addPatientRecord = async (patientId, ipfsHash) => {
    return await contract.addPatientRecord(patientId, ipfsHash);
};

const getPatientRecord = async (patientId) => {
    return await contract.getPatientRecord(patientId);
};

export default { uploadToIPFS, fetchFromIPFS, addPatientRecord, getPatientRecord };
