import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers" ;
import "@nomicfoundation/hardhat-verify";
import dotenv from 'dotenv';
dotenv.config();

require('@openzeppelin/hardhat-upgrades');


const config: HardhatUserConfig = {
  solidity: "0.8.20",
  sourcify: {
    // Enable Sourcify verification by default
    enabled: true,
  },
  networks: {
    dbcTestnet: {
      url: 'https://rpc-testnet.dbcwallet.io',
      accounts: [process.env.DBC_TEST_PRIVATE_KEY],
      chainId: 19850818,
      timeout: 600000,
    },
  },
  etherscan: {
    apiKey: {
      dbcTestnet: 'no-api-key-needed',
      dbcMainnet: 'no-api-key-needed',
    },
    customChains: [
      {
        network: "dbcTestnet",
        chainId: 19850818,
        urls: {
          apiURL: "https://blockscout-testnet.dbcscan.io/api",
          browserURL: "https://blockscout-testnet.dbcscan.io",
        },
      },
    ]
  }
};

export default config;
