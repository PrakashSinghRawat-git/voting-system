require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        defaultNetwork: "sepolia",
        networks: {
            hardhat: {},
            sepolia: {
                url: "https://rpc.sepolia.org",
                accounts: ["0x" + process.env.PRIVATE_KEY],
            },
        },
        version: "0.8.17",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};
