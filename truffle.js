// module.exports = {
//   migrations_directory: "./migrations",
//   networks: {
//     development: {
//       host: "localhost",
//       port: 8545,
//       network_id: "*" // Match any network id
//     }
//   } 
// };



const HDWalletProvider = require("truffle-hdwallet-provider");
const LoomTruffleProvider = require('loom-truffle-provider');
const mnemonic = "YOUR MNEMONIC HERE";
module.exports = {
    // Object with configuration for each network
    networks: {
        //development
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*",
            gas: 9500000
        },
        // Configuration for Ethereum Mainnet
        mainnet: {
            provider: function() {
                return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/<YOUR_INFURA_API_KEY>")
            },
            network_id: "1" // Match any network id
        },
        // Configuration for Rinkeby Metwork
        rinkeby: {
            provider: function() {
                // Setting the provider with the Infura Rinkeby address and Token
                return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/<YOUR_INFURA_API_KEY>")
            },
            network_id: 4
        },
        // Configuration for Loom Testnet
        loom_testnet: {
            provider: function() {
                const privateKey = 'YOUR_PRIVATE_KEY';
                const chainId = 'extdev-plasma-us1';
                const writeUrl = 'wss://extdev-basechain-us1.dappchains.com/websocket';
                const readUrl = 'wss://extdev-basechain-us1.dappchains.com/queryws';
                // This returns a new Loom Provider
                // return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
                // We had to change the above line to this to tell the provider to fill in the accounts array ❓
                const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
                loomTruffleProvider.createExtraAccountsFromMnemonic(mnemonic, 10);
                return loomTruffleProvider;
            },

            network_id: '9545242630824'
        }
    },
    compilers: {
        solc: {
            version: "0.4.25"
        }
    }
};
