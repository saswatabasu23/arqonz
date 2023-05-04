require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Kd338u26Dt1tKVg1OJ0C9sWhIppqN9nD", 
      accounts: [ "b8ec24bb7484a2ebedd02d2b4658c8014ab924b7f34972bbd8b9fcdcb3c1a867" ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};