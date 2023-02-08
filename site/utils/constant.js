import Web3 from "web3";
import ContractABI from "./Amazon.json";

export const createContract = () => {
  if (typeof window !== "undefined" && window.ethereum) {
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ContractABI.abi, process.env.CONTRACT_ADDRESS);
    return contract;
  }
};
