// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// OpenZeppelin ka ERC20Permit import
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract GaslessToken is ERC20Permit {

    constructor()
        // ERC20 basic setup
        ERC20("GaslessToken", "GLT")

        // Permit setup (gasless approval ke liye)
        ERC20Permit("GaslessToken")
    {
        // Initial tokens deployer ko milenge
        _mint(msg.sender, 1000000 * 10**18);
    }
}