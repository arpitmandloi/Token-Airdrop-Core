const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying TokenAirdrop contract from:", deployer.address);

  // Replace this with the actual deployed ERC20 token address
  const tokenAddress = "0xYourTokenAddressHere";

  const TokenAirdrop = await hre.ethers.getContractFactory("TokenAirdrop");
  const airdrop = await TokenAirdrop.deploy(tokenAddress);

  await airdrop.deployed();

  console.log("✅ TokenAirdrop deployed at:", airdrop.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
