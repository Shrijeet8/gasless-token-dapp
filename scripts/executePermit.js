const { ethers } = require("hardhat");

async function main() {

  const [owner, user] = await ethers.getSigners();

  console.log("Owner:", owner.address);
  console.log("User:", user.address);

  const token = await ethers.getContractAt(
    "GaslessToken",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );

  const value = ethers.utils.parseEther("10");

  const deadline = 1776365810;

  const signature = "0x1fea8c3bbd679676e4fecbd2b094744c14bb595fc486f56b6631aa84490ccd0705913fa7fd896a9c68d0e6a9bed1940f94b7340b625b6975b8dfbd25584ef9661c";

  const sig = ethers.utils.splitSignature(signature);

  // 🔥 STEP 1: permit FIRST (NO STATE CHANGE BEFORE THIS)
  await token.permit(
    user.address,
    owner.address,
    value,
    deadline,
    sig.v,
    sig.r,
    sig.s
  );

  console.log("✅ Permit executed");

  // 🔥 STEP 2: ab user ko tokens de (safe now)
  await token.transfer(user.address, ethers.utils.parseEther("100"));
  console.log("✅ Tokens given to user");

  // 🔥 STEP 3: transfer using permit
  await token.transferFrom(
    user.address,
    owner.address,
    value
  );

  console.log("🔥 Gasless transfer success!");
}

main().catch(console.error);