import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  // defaultNetwork: "mumbai",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URL || '',
      accounts: [process.env.PRIVATE_KEY || '']
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};

export default config;
