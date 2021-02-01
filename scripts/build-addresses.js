'use strict';

const fs = require('fs');
const path = require('path');
const snx = require('@oikos/oikos');
const moment = require('moment');
const tronWeb = require('tronweb');

const { version, date } = require('./utils');

console.log('Building addresses.md');

// This function generates the latest addresses for all environments
const generateAddresses = () => {
	const outputPath = path.join(__dirname, '..', 'content', 'addresses.md');
	const currentVersion = 'v' + version();

	let headerContent = `Here is the list of all contracts within the current Oikos system.\n\n**Version**: [${currentVersion}](https://github.com/oikos-cash/oikos/tree/${currentVersion})\n\n**Docs Built**: ${moment(
		date(),
	).format('MMM D, YYYY')}\n\n`;

	/*headerContent +=
		'!!! info "Naming Conventions"\n\tWithin the developer ecosystem, the names of Oikos contracts are referred to by their `source` Solidity file.' +
		'If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol`' +
		' - then the convention is to suffix the name of the differing feature to the end - be it the proxy target ' +
		'e.g. `FeePool` for `ProxyFeePool` or the synth currencyKey eg: `sTRX` for `SynthsTRX`';

	headerContent +=
		'\n\n!!! tip "Handy Contract Links"\n\tAll of the below contracts can be accessed by our [contract linker](https://github.com/Synthetixio/contract-linker) utility. Simply suffix the contract name to the end of' +
		' https://contracts.oikos.cash to get a link that will always redirect to the latest version of the contract on Tronscan.\n\n\tFor example, try https://contracts.oikos.cash/Oikos to get linked to the latest Oikos underlying.' +
		'\n\n\tFor testnets, insert the testnet name before the contract, as in https://contracts.oikos.cash/kovan/Oikos';*/

	const contractContent = ['mainnet', 'shasta', 'nile']
		.map(network => {
			const targets = snx.getTarget({ network });

			const header = `\n## ${network.toUpperCase()} Contracts\n`;
			return (
				header +
				'<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>' +
				Object.keys(targets)
					.sort()
					.map(targetContract => {
						const { address, source } = targets[targetContract];
						const addressReadable = tronWeb.address.fromHex(address);
						const networkPrefix = network !== 'mainnet' ? network + '.' : '';
						return `
              <tr>
                <td>${targetContract}</td>
                <td><a target="_blank" href="https://github.com/oikos-cash/oikos/blob/master/contracts/${source}.sol">${source}.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/oikos-cash/oikos-js/master/lib/abis/${network.toLowerCase()}/${source}.json">${source}.json</a></td>
                <td><a target="_blank" href="https://${networkPrefix}tronscan.io/#/address/${addressReadable}">${addressReadable}</a>
                </td>
              </tr>`;
					})
					.join('') +
				'</table>'
			);
		})
		.join('\n');

	const content = `${headerContent}\n\n ${contractContent}`;

	fs.writeFileSync(outputPath, content);
};

generateAddresses();
