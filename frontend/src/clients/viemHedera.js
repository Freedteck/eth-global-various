import { Web3Auth } from "@web3auth/modal";
import {
  createPublicClient,
  createWalletClient,
  custom,
  parseEther,
} from "viem";
import { hederaTestnet } from "viem/chains";

// Get Accounts
const getAccounts = async (provider) => {
  const walletClient = createWalletClient({
    chain: hederaTestnet,
    transport: custom(provider),
  });

  // Get user's Ethereum public address
  const address = await walletClient.getAddresses();
  return address;
};

// Get user's balance in ether
const getBalance = async (provider) => {
  const publicClient = createPublicClient({
    chain: hederaTestnet, // for hederaTestnet
    transport: custom(provider),
  });

  const walletClient = createWalletClient({
    chain: hederaTestnet,
    transport: custom(provider),
  });

  // Get user's Ethereum public address
  const address = await walletClient.getAddresses();

  // Get user's balance in ether
  const balance = await publicClient.getBalance({ address: address[0] });

  return balance / 1000000000000000000n;
};

// Send transaction
const sendTransaction = async (provider, receipient, amountToSend) => {
  const publicClient = createPublicClient({
    chain: hederaTestnet, // for hederaTestnet
    transport: custom(provider),
  });

  const walletClient = createWalletClient({
    chain: hederaTestnet, // for hederaTestnet
    transport: custom(provider),
  });

  // data for the transaction
  const destination = receipient;
  const amount = parseEther(`${amountToSend}`);
  // const address = await this.getAccounts();

  const address = await walletClient.getAddresses();

  // Submit transaction to the blockchain
  const hash = await walletClient.sendTransaction({
    account: address[0],
    to: destination,
    value: amount,
  });

  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  return receipt;
};

// Sign Message
const signMessage = async (provider, message) => {
  //   const publicClient = createPublicClient({
  //     chain: hederaTestnet, // for hederaTestnet
  //     transport: custom(provider),
  //   });

  const walletClient = createWalletClient({
    chain: hederaTestnet, // for hederaTestnet
    transport: custom(provider),
  });

  // data for signing
  const address = await walletClient.getAddresses();
  const originalMessage = message;

  // Sign the message
  const hash = await walletClient.signMessage({
    account: address[0],
    message: originalMessage,
  });
  return hash;
};

// Deploy Contract
const deployContract = async (provider, contractABI, contractByteCode, arg) => {
  const publicClient = createPublicClient({
    chain: this.getViewChain(),
    transport: custom(provider),
  });

  const walletClient = createWalletClient({
    chain: hederaTestnet,
    transport: custom(provider),
  });

  const [account] = await walletClient.getAddresses();
  const hash = await walletClient.deployContract({
    abi: contractABI,
    account,
    bytecode: contractByteCode,
    args: [arg], // arg is the constructor to the smart contract
  });

  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  const deployedContractAddress = receipt.contractAddress;

  return deployedContractAddress;
};

// Read from contract
const readFromContract = async (provider, contractABI, myContractAddress) => {
  const publicClient = createPublicClient({
    chain: hederaTestnet, // for hederaTestnet
    transport: custom(provider),
  });

  const contractAddress = myContractAddress; // On Sepolia or any chain, replace with your contract address

  // Read message from smart contract
  const message = await publicClient.readContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "message", // Replace "message" with actual functionName
  });

  return message;
};

// Write to contract
const writeToContract = async (
  provider,
  contractABI,
  myContractAddress,
  message
) => {
  const publicClient = createPublicClient({
    chain: hederaTestnet,
    transport: custom(provider),
  });

  const walletClient = createWalletClient({
    chain: hederaTestnet,
    transport: custom(provider),
  });

  const contractAddress = myContractAddress; // On Sepolia or any chain, replace with your contract address
  const address = await walletClient.getAddresses();

  // Submit transaction to the blockchain
  const hash = await walletClient.writeContract({
    account: address[0],
    address: contractAddress,
    abi: JSON.parse(JSON.stringify(contractABI)),
    functionName: "update", // Replace "update" with actual functionName
    args: [message],
  });

  // Send transaction to smart contract to update message
  const receipt = await publicClient.waitForTransactionReceipt({ hash });

  return receipt;
};

//Assuming user is already logged in.
async function getPrivateKey() {
  const privateKey = await Web3Auth.provider.request({
    method: "eth_private_key",
  });
  //Do something with privateKey
  console.log(privateKey);
}

export default {
  getAccounts,
  getBalance,
  sendTransaction,
  signMessage,
  deployContract,
  readFromContract,
  writeToContract,
  getPrivateKey,
};
