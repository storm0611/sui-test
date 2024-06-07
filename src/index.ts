import { PACKAGE_ID, myWallet, suiClient } from "./constants";
import { Transaction } from '@mysten/sui/transactions'

(async () => {
    const tx = new Transaction();
    tx.moveCall({
        target: `${PACKAGE_ID}::my_module::test`,
        arguments: [tx.pure.string("Hello World")],
    })
    const txOpts = {
        showBalanceChanges: true,
        showEffects: true,
        showEvents: true,
        showInput: true,
        showObjectChanges: true,
        showRawEffects: true,
        showRawInput: true,

    };
    suiClient.signAndExecuteTransaction({
        transaction: tx,
        signer: myWallet,
        options: txOpts,
    }).then(result => {
        if (result && result.effects && result.effects.status.status === "success") {
            const output = result.events?.length ? result.events[0].parsedJson : "no output"; // Modify according to actual result structure
            console.log("Output of test function:", output);
        } else {
            console.error("Transaction failed", result);
        }
    }).catch(err => console.log(err));
})();