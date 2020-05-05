# Hello Blockchain Dapp with Drizzle

Sample dapp using Drizzle companion to the HelloBlockchain contract examples from the devkit.  This app will allow you to read/write to the HelloBlockchain smart contract, deployed to any chain.

## Prereqs

- NodeJS (v12.x) - https://nodejs.org/en/
- Truffle - `npm install -g truffle`
- Ganache-Cli - `npm install -g ganache-cli`  (for local development only)
- VS Code extension for Ethereum - https://marketplace.visualstudio.com/items?itemName=AzBlockchain.azure-blockchain

## Build

Install NPM packages - `npm install`
Build the smart contracts
    ```
    Right click on the HelloBlockchain.sol file in the contracts folder and select build contracts
    ``` 

## Deploy smart contracts

1. Connect to the desired blockchain with the VS Code extension
2. Right click on the HelloBlockchain.sol file in the contracts folder and select deploy contracts.
3. When prompted choose the desired network.

## Start the dapp and use

```
npm start
```
Navigate to http://localhost:3000

`NOTE: If you are using a remote network (not ganache), you will to have a injected web3 provider.  [MetaMask](https://metamask.io/) works well for this in browser.`
