# ⚡ Gasless Token dApp (EIP-2612)

A Web3 dApp that enables **gasless token transfers** using the EIP-2612 permit mechanism.  
Users can approve and transfer tokens **without paying gas fees**, thanks to off-chain signatures and a relayer.

---

## 🔥 Features

- ✅ Gasless approvals using **EIP-2612 (permit)**
- ✅ Off-chain signature (no gas required)
- ✅ Relayer executes transactions on behalf of user
- ✅ ERC20 token with permit functionality
- ✅ Sepolia testnet integration
- ✅ Clean frontend with MetaMask support

---

## 🛠️ Tech Stack

- Solidity (ERC20 + EIP-2612)
- Hardhat
- Ethers.js
- HTML / CSS / JavaScript
- MetaMask
- Sepolia Testnet

---

## ⚙️ How It Works

1. User signs a **permit message (EIP-712)** off-chain
2. Signature is generated (v, r, s)
3. Relayer calls:
   - `permit()`
   - `transferFrom()`
4. Tokens are transferred without user paying gas

---

## 📦 Smart Contract

Deployed on Sepolia:

