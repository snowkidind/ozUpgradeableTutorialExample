process.env.NODE_ENV = 'development';
const env = require('node-env-file');
env(__dirname + '/.env');

require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/' + process.env.ALCHEMY_KEY_ROPSTEN,
      accounts: {mnemonic: process.env.MNEMONIC}
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/' + process.env.ALCHEMY_KEY_RINKEBY,
      accounts: {mnemonic: process.env.MNEMONIC}
    },
  },
};
