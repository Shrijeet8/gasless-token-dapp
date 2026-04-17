const { ethers } = require("hardhat");

async function main() {

  // 🔹 relayer + user
  const [owner, user] = await ethers.getSigners();

  console.log("Owner:", owner.address);
  console.log("User:", user.address);

  // 🔹 contract instance
  const token = await ethers.getContractAt(
    "GaslessToken",
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );

  // 🔹 nonce (VERY IMPORTANT)
  const nonce = await token.nonces(user.address);

  // 🔹 value
  const amount = ethers.utils.parseEther("10");

  // 🔹 deadline (store this!)
  const deadline = Math.floor(Date.now() / 1000) + 3600;

  // 🔹 domain (EIP-712)
  const domain = {
    name: "GaslessToken",
    version: "1",
    chainId: 31337,
    verifyingContract: token.address,
  };

  // 🔹 types
  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };

  // 🔹 values
  const values = {
    owner: user.address,
    spender: owner.address,
    value: amount,
    nonce: nonce.toNumber(),
    deadline: deadline,
  };

  // 🔥 SIGNATURE
  const signature = await user._signTypedData(domain, types, values);

  // 🔥 PRINT EVERYTHING (IMPORTANT)
  console.log("\n========= COPY THESE =========");
  console.log("Value:", amount.toString());
  console.log("Nonce:", nonce.toString());
  console.log("Deadline:", deadline);
  console.log("Signature:", signature);
  console.log("==============================\n");
}

main().catch(console.error);