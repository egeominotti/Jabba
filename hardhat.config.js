require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { API_URL_ARBITRUM, WALLET_PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "arbitrum",
  networks: {
    hardhat: {},
    arbitrum: {
      url: API_URL_ARBITRUM,
      accounts: [`0x${WALLET_PRIVATE_KEY}`],
    },
  },
  compilers: {
    solc: {
      version: "0.8.17",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
