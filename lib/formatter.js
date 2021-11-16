"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Formatter = exports.computeTransactionHash = void 0;
var amino_js_1 = require("@okexchain/amino-js");
var ethers_1 = require("ethers");
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
var Formatter = /** @class */ (function (_super) {
    __extends(Formatter, _super);
    function Formatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Formatter.prototype.transaction = function (value) {
        var tx = ethers_1.utils.parseTransaction(value);
        tx.hash = computeTransactionHash(tx);
        return tx;
    };
    return Formatter;
}(ethers_1.providers.Formatter));
exports.Formatter = Formatter;
//# sourceMappingURL=formatter.js.map