import { providers, Transaction } from "ethers";
export declare function computeTransactionHash(tx: Transaction): string;
export declare class Formatter extends providers.Formatter {
    transaction(value: any): any;
}
