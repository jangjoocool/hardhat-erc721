import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const contractFactory = await ethers.getContractFactory("PolygonERC721");
  const contract = await contractFactory.deploy();

  const txHash = contract.deployTransaction.hash;
  const txReceipt = await ethers.provider.waitForTransaction(txHash);
  
  console.log("Contract deployed to address: ", txReceipt.contractAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
