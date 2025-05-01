import Web3 from "web3";
import contractABI from "../../Blockchain/build/contracts/PatientRecords.json" assert { type: "json" };

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
const contractAddress = "0x51441E1093EE71B1451732845AECB477B912cF01";
const contract = new web3.eth.Contract(contractABI.abi, contractAddress);

export { web3, contract };

