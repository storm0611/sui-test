import { Balance } from '@mysten/sui/dist/cjs/client';
import { getFaucetHost, requestSuiFromFaucetV1 } from '@mysten/sui/faucet';
import { MIST_PER_SUI } from '@mysten/sui/utils';
import { MY_ADDRESS, NETWORK, suiClient } from './constants';

// Convert MIST to Sui
const balance = (balance: Balance) => {
    return Number.parseInt(balance.totalBalance) / Number(MIST_PER_SUI);
};

const airdrop = async () => {
    // store the JSON representation for the SUI the address owns before using faucet
    const suiBefore = await suiClient.getBalance({
        owner: MY_ADDRESS,
    });

    await requestSuiFromFaucetV1({
        // use getFaucetHost to make sure you're using correct faucet address
        // you can also just use the address (see Sui TypeScript SDK Quick Start for values)
        host: getFaucetHost(NETWORK),
        recipient: MY_ADDRESS,
    });

    // store the JSON representation for the SUI the address owns after using faucet
    const suiAfter = await suiClient.getBalance({
        owner: MY_ADDRESS,
    });

    // Output result to console.
    console.log(
        `Balance before faucet: ${balance(suiBefore)} SUI. Balance after: ${balance(
            suiAfter,
        )} SUI. Hello, SUI!`,
    );
}

