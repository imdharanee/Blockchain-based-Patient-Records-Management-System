import { web3, contract } from "../config/blockchainConfig.js";

export const addPatientRecord = async (req, res) => {
  try {
    let { name, age, ipfsHash } = req.body;

    
    age = Number(age);
    if (isNaN(age)) {
      return res.status(400).json({ error: "Age must be a valid number" });
    }

    const accounts = await web3.eth.getAccounts();
    
    await contract.methods.addPatientRecord(name, age, ipfsHash).send({ from: accounts[0] });
    res.status(201).json({ message: "Record added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getPatientRecord = async (req, res) => {
  try {
    const { patientId } = req.params;
    const record = await contract.methods.getPatientRecord(patientId).call();
    
    res.status(200).json({ record });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
