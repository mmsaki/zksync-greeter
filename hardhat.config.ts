import '@matterlabs/hardhat-zksync-deploy';
import '@matterlabs/hardhat-zksync-solc';
import * as dotenv from 'dotenv';
dotenv.config();

module.exports = {
	zksolc: {
		version: '1.3.5',
		compilerSource: 'binary',
		settings: {},
	},
	defaultNetwork: 'zkSyncTestnet',

	networks: {
		zkSyncTestnet: {
			url: 'https://zksync2-testnet.zksync.dev',
			ethNetwork: `https://goerli.infura.io/v3/${process.env.INFURA_API}`,
			zksync: true,
		},
	},
	solidity: {
		version: '0.8.18',
	},
};
