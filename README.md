First, .env.sample -> .env
and fill up environment variables.
Make sure to have some eth to pay gas fees while contract deployment. 

```shell
npm install
```

Deploy on hardhat testing network using
```shell
npx hardhat run scripts/deployContracts.js --network hardhat
```

Deploy on Base chain
```shell
npx hardhat run scripts/deployContracts.js --network hardhat
```

Deploy on Blast chain
```shell
npx hardhat run scripts/deployContracts.js --network blast
```

Incase if needed to create solidity interface from ABI

```shell
cat ParlayCoreSimple.json | jq -r '.abi' | npx abi-to-sol --solidity-version="^0.8.20" IParlayCoreSimple > IParlayCoreSimple.sol
```
