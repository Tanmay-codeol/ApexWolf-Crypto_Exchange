//
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/gZMPwqe3q1Q3hQ5HMlts3iJ1sXaGGye-",
      accounts: [
        "1e18c34f76eeafec99927fccaeb026664aff11d2bc10957459d106be19a32f85",
      ],
    },
  },
};
