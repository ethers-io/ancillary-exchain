"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formatter = exports.computeTransactionHash = void 0;
const amino_js_1 = require("@okexchain/amino-js");
const ethers_1 = require("ethers");
function stringify(value) {
    return ethers_1.BigNumber.from(value).toString();
}
function computeTransactionHash(tx) {
    return ethers_1.utils.sha256(amino_js_1.marshalEthereumTx({
        nonce: stringify(tx.nonce || 0),
        gasPrice: stringify(tx.gasPrice || 0),
        gas: stringify(tx.gasLimit || 0),
        to: ((tx.to != null) ? ethers_1.utils.hexlify(tx.to) : ""),
        value: stringify(tx.value || 0),
        input: ethers_1.utils.hexlify(tx.data),
        v: stringify(tx.v || 0),
        r: stringify(tx.r || 0),
        s: stringify(tx.s || 0)
    }));
}
exports.computeTransactionHash = computeTransactionHash;
class Formatter extends ethers_1.providers.Formatter {
    transaction(value) {
        const tx = ethers_1.utils.parseTransaction(value);
        tx.hash = computeTransactionHash(tx);
        return tx;
    }
}
exports.Formatter = Formatter;
//# sourceMappingURL=formatter.js.map