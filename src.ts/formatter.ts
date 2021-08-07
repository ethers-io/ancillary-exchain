import { marshalEthereumTx } from "@okexchain/amino-js";

import { BigNumber, BigNumberish, providers, Transaction, utils } from "ethers";

function stringify(value: BigNumberish): string {
    return BigNumber.from(value).toString();
}

export function computeTransactionHash(tx: Transaction): string {
    return utils.sha256(marshalEthereumTx({
        nonce: stringify(tx.nonce || 0),
        gasPrice: stringify(tx.gasPrice || 0),
        gas: stringify(tx.gasLimit || 0),
        to: ((tx.to != null) ? utils.hexlify(tx.to): "0x"),
        value: stringify(tx.value || 0),
        input: utils.hexlify(tx.data),
        v: stringify(tx.v || 0),
        r: stringify(tx.r || 0),
        s: stringify(tx.s || 0)
    }));
}

export class Formatter extends providers.Formatter {
    transaction(value: any): any {
        const tx = utils.parseTransaction(value);
        tx.hash = computeTransactionHash(tx);
        return tx;
    }
}
