import { load } from "ts-dotenv";

const env = load({
    RPC_URL: String,
    WALLET_SECRETKEY: String,
})

export const {
    RPC_URL,
    WALLET_SECRETKEY
} = env;