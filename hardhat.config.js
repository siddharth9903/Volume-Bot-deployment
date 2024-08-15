require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
          {
            version: "0.8.24",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200,
              },
              viaIR: true,
            },
          },
        ],
      },
      networks: {
        hardhat: {
          allowUnlimitedContractSize: true,
        }, 
        blast: {
            url: "https://blast.drpc.org",
            accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
            chainId: 81457
        },
        base: {
          url: "https://base-rpc.publicnode.com",
          accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2],
          chainId: 8453
        },
      },
};
