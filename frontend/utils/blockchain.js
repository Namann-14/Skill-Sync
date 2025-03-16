import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0xeb0dcE69107bfBA2F69496B417ED0c90262C2D40"; 

const CONTRACT_ABI = [ 
  {
    "type": "function",
    "name": "registerUser",
    "inputs": [
      { "name": "_firstName", "type": "string", "internalType": "string" },
      { "name": "_lastName", "type": "string", "internalType": "string" },
      { "name": "_email", "type": "string", "internalType": "string" },
      { "name": "_github", "type": "string", "internalType": "string" },
      { "name": "_portfolio", "type": "string", "internalType": "string" },
      { "name": "_resume", "type": "string", "internalType": "string" }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
];

export async function storeDataOnBlockchain(formData) {
  if (!window.ethereum) {
    alert("Please install MetaMask!");
    return;
  }

  try {
    await window.ethereum.request({ method: "eth_requestAccounts" });

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    console.log("Submitting transaction...");

    // Send transaction
    const txResponse = await contract.registerUser(
      formData.firstname,
      formData.lastname,
      formData.email,
      formData.github,
      formData.website,
      "resume.pdf" 
    );

    console.log("Transaction sent! Hash:", txResponse.hash);

    // Wait for transaction to be mined
    const receipt = await txResponse.wait();
    
    console.log("Transaction confirmed!", receipt);

    return {
      transactionHash: receipt.transactionHash || txResponse.hash,  // Use txResponse.hash if missing
      blockNumber: receipt.blockNumber,
    };
  } catch (error) {
    console.error("Blockchain Error:", error);
    throw new Error(error.message || "Failed to store data on blockchain");
  }
}
