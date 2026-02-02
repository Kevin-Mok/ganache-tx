# Ganache TX

Ethereum transaction demonstration showing how to create, sign, and send raw transactions to a local Ganache blockchain.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Web3.js](https://img.shields.io/badge/Web3.js-1.10-orange)
![Ethereum](https://img.shields.io/badge/Ethereum-Ganache-purple)

## Overview

A minimal educational project demonstrating the complete lifecycle of Ethereum transactions: creating raw transactions with gas parameters, signing with a private key, and broadcasting to the network. Uses Web3.js and ethereumjs-tx for low-level transaction handling.

## Features

- **Raw Transaction Creation** - Manual transaction construction with gas parameters
- **Transaction Signing** - Private key signing with ethereumjs-tx
- **Local Blockchain** - Ganache integration for development
- **Web3.js Integration** - Direct blockchain interaction

## Tech Stack

| Component | Technology |
|-----------|------------|
| **Runtime** | Node.js (ES Modules) |
| **Blockchain** | Web3.js 1.10.0 |
| **Signing** | ethereumjs-tx 2.1.2 |
| **Network** | Ganache (local) |

## Project Structure

```
ganache-tx/
├── index.js          # Transaction demo script
├── package.json      # Dependencies
└── README.md
```

## Installation

### Prerequisites
- Node.js and npm
- Ganache CLI or GUI

### Setup

```bash
# Clone and install
git clone git@github.com:Kevin-Mok/ganache-tx.git
cd ganache-tx
npm install

# Start Ganache on default settings (http://127.0.0.1:8545)
ganache

# Update privateKey in index.js with one from Ganache
# Run the demo
node index.js
```

## How It Works

```javascript
// 1. Create raw transaction
const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: receiverAddress,
    value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
};

// 2. Sign transaction
const tx = new Tx(txObject);
tx.sign(privateKey);

// 3. Broadcast to network
web3.eth.sendSignedTransaction(serializedTx);
```

## Why This Project is Interesting

### Technical Highlights

1. **Low-Level Transaction Handling**
   - Manual nonce management
   - Gas price and limit configuration
   - Raw transaction serialization

2. **Cryptographic Signing**
   - Private key transaction signing
   - ethereumjs-tx library usage
   - Secure key handling patterns

3. **Blockchain Fundamentals**
   - Understanding transaction lifecycle
   - Web3.js provider configuration
   - Local development workflow

### Skills Demonstrated

- **Ethereum Development**: Transaction structure, signing, broadcasting
- **Web3.js**: Provider setup, utility functions
- **Node.js**: ES modules, async/await patterns
- **Blockchain**: Gas economics, nonce management

## Author

[Kevin Mok](https://github.com/Kevin-Mok)
