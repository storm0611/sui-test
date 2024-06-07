import { getFullnodeUrl, SuiClient } from '@mysten/sui/client';
import { Ed25519Keypair } from '@mysten/sui/keypairs/ed25519';
import { WALLET_SECRETKEY } from './config';
import { fromB64 } from '@mysten/bcs';

export const NETWORK = "devnet";
export const MY_ADDRESS = '0xf21c7bedf2c9cccdfe948ce159594d96be199b8c37d8c4d9d3ca4f427aff06c5';
export const myWallet = Ed25519Keypair.fromSecretKey(fromB64(WALLET_SECRETKEY).subarray(1));
export const PACKAGE_ID = "0x33d4dcc313d36d9dea700ba7efadd87cdd6f66e9da9cb0273f4b11441b7fe4f4"

export const suiClient = new SuiClient({ url: getFullnodeUrl(NETWORK) });