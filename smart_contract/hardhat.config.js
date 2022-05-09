require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/6LkCbnrTC4-OnQEUigpx44Pfqm6Dxhg0',
      accounts: [
        '52b0c3c27ff5ce1a152a338daaa44115e05d059ff404090e86985b125ab31485'
      ],
    },
  },
};
