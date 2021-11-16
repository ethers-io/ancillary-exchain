"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.equals = void 0;
var assert_1 = __importDefault(require("assert"));
var fs_1 = __importDefault(require("fs"));
var path_1 = require("path");
var ethers_1 = require("ethers");
var _1 = require(".");
var Tests = {
    // Only recent blocks and transactions work, so these tests need
    // to be periodically updated.
    Blocks: [
        {
            hash: '0x5ef9916c4808d908d6e0bc578f6cc637221e8177732ddcb25311f26694cd1d59',
            parentHash: '0x27e045b1f9fbb3e7ef763df07cf7f664146dd2413eaa22daab32793f82b77bf6',
            number: 7269300,
            timestamp: 1637020948,
            nonce: '0x0000000000000000',
            difficulty: 0,
            gasLimit: ethers_1.BigNumber.from("0xffffffff"),
            gasUsed: ethers_1.BigNumber.from("0x00"),
            miner: '0x555299c39b76896f96A02682F56F8bFa47dE248D',
            extraData: '0x',
            transactions: []
        },
    ],
    Transactions: [
        {
            hash: '0xfb7b98aaf9028866eb0308a4e9ddf8388278870af524ae30665d3113458728e2',
            type: 0,
            accessList: null,
            blockHash: '0xd441ff6d99de0a314e88357a1230a1968e78aea3e1284774148947fee3489bdc',
            blockNumber: 7269402,
            transactionIndex: 0,
            from: '0x8522395fdca22e59b6F8d0bA2579ACd5877f50b7',
            gasPrice: ethers_1.BigNumber.from("0x05f5e100"),
            gasLimit: ethers_1.BigNumber.from("0x7b0c"),
            to: '0x8522395fdca22e59b6F8d0bA2579ACd5877f50b7',
            value: ethers_1.BigNumber.from("0x01"),
            nonce: 9,
            data: '0x',
            r: '0xaf9fdcfbf62763ab76d7fbdec8920c6e13ca6b70b673d106fb28a504acc9dc43',
            s: '0x13fdb9206daba92298ff5c293ea2ed5507407b97cf4dc21c562db40a06932d8a',
            v: 166,
            creates: null,
            chainId: 65
        },
    ],
    TransactionReceipts: [
        {
            to: '0x8522395fdca22e59b6F8d0bA2579ACd5877f50b7',
            from: '0x8522395fdca22e59b6F8d0bA2579ACd5877f50b7',
            contractAddress: null,
            transactionIndex: 0,
            gasUsed: ethers_1.BigNumber.from("0x5208"),
            logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            blockHash: '0xd441ff6d99de0a314e88357a1230a1968e78aea3e1284774148947fee3489bdc',
            transactionHash: '0xfb7b98aaf9028866eb0308a4e9ddf8388278870af524ae30665d3113458728e2',
            logs: [],
            blockNumber: 7269402,
            cumulativeGasUsed: ethers_1.BigNumber.from("0x5208"),
            status: 1,
            type: 0,
            byzantium: true
        },
    ]
};
function _equals(path, actual, expected) {
    if (expected === null) {
        assert_1["default"].equal(actual, expected, "expected null: " + path + "!null");
    }
    else if (ethers_1.BigNumber.isBigNumber(expected)) {
        assert_1["default"].ok(ethers_1.BigNumber.isBigNumber(actual), "expected BigNumber instance: " + path + "!BigNumber");
        assert_1["default"].ok(expected.eq(actual), "BigNumber not equal: " + path + "!a.eq(e)");
    }
    else if (typeof (expected) === "object") {
        assert_1["default"].ok(typeof (actual) === "object", "expected object: " + path + "!object");
        for (var key in expected) {
            _equals(path + "@" + key + "/", actual[key], expected[key]);
        }
    }
    else if (Array.isArray(expected)) {
        assert_1["default"].ok(Array.isArray(actual), "expected an array: " + path + "!array");
        assert_1["default"].equal(expected.length, actual.length, "array length mismatch: " + path + "a.length!=e.length");
        expected.forEach(function (item, index) {
            _equals(path + "#" + index + "/", actual[index], expected[index]);
        });
    }
    else {
        assert_1["default"].equal(actual, expected, "not equal: " + path + "a!=b");
    }
}
function equals(actual, expected) {
    _equals("/", actual, expected);
    return true;
}
exports.equals = equals;
describe("Test ExchainProvider", function () {
    var provider = new _1.JsonRpcProvider("https:/\/exchaintestrpc.okex.org");
    // A secret we can use in our testcases for wallets and such
    var secret = (function () {
        try {
            return JSON.parse(fs_1["default"].readFileSync(path_1.resolve(__dirname, "../env.json")).toString()).secret;
        }
        catch (error) {
            console.log("No secret", error);
        }
        return null;
    })();
    if (secret) {
        var wallet_1 = new ethers_1.ethers.Wallet(ethers_1.ethers.utils.id(secret), provider);
        it("Displays secret account details", function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _c, _d, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            this.timeout(60000);
                            console.log("Wallet:", wallet_1.address);
                            _b = (_a = console).log;
                            _c = ["Balance"];
                            _e = (_d = ethers_1.ethers.utils).formatEther;
                            return [4 /*yield*/, wallet_1.getBalance()];
                        case 1:
                            _b.apply(_a, _c.concat([_e.apply(_d, [_f.sent()])]));
                            return [2 /*return*/];
                    }
                });
            });
        });
        it("Sends a transaction", function () {
            return __awaiter(this, void 0, void 0, function () {
                var tx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(180000);
                            return [4 /*yield*/, wallet_1.sendTransaction({ to: wallet_1.address, value: 1 })];
                        case 1:
                            tx = _a.sent();
                            console.log(tx);
                            return [4 /*yield*/, tx.wait()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
        var bytecode_1 = "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b6100556004803603810190610050919061009d565b610075565b005b61005f61007f565b60405161006c91906100d9565b60405180910390f35b8060008190555050565b60008054905090565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea26469706673582212207c54d252a58b2a42da91ec168afc7481043a6b01121ba19e19e4343be3decc7564736f6c63430008070033";
        var runtimeBytecode_1 = "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b6100556004803603810190610050919061009d565b610075565b005b61005f61007f565b60405161006c91906100d9565b60405180910390f35b8060008190555050565b60008054905090565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea26469706673582212207c54d252a58b2a42da91ec168afc7481043a6b01121ba19e19e4343be3decc7564736f6c63430008070033";
        var abi_1 = [
            "function set(uint256)",
            "function get() view returns (uint)"
        ];
        it("Deploys a ccontract", function () {
            return __awaiter(this, void 0, void 0, function () {
                var factory, contract, data;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(180000);
                            factory = new ethers_1.ethers.ContractFactory(abi_1, bytecode_1, wallet_1);
                            return [4 /*yield*/, factory.deploy()];
                        case 1:
                            contract = _a.sent();
                            return [4 /*yield*/, contract.deployTransaction.wait()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, provider.getCode(contract.address)];
                        case 3:
                            data = _a.sent();
                            assert_1["default"].equal(data, runtimeBytecode_1, "deployed bytecode is correct");
                            return [2 /*return*/];
                    }
                });
            });
        });
    }
    it("Fetches Block Number", function () {
        return __awaiter(this, void 0, void 0, function () {
            var blockNumber;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.timeout(60000);
                        return [4 /*yield*/, provider.getBlockNumber()];
                    case 1:
                        blockNumber = _a.sent();
                        assert_1["default"].ok(typeof (blockNumber) === "number");
                        return [2 /*return*/];
                }
            });
        });
    });
    Tests.Blocks.forEach(function (test) {
        it("fetches block #" + test.number, function () {
            return __awaiter(this, void 0, void 0, function () {
                var block;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(60000);
                            return [4 /*yield*/, provider.getBlock(test.number)];
                        case 1:
                            block = _a.sent();
                            //console.log("BLOCK", block);
                            equals(block, test);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    Tests.Transactions.forEach(function (test) {
        it("fetches transaction: " + test.hash.substring(0, 10), function () {
            return __awaiter(this, void 0, void 0, function () {
                var tx;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(60000);
                            return [4 /*yield*/, provider.getTransaction(test.hash)];
                        case 1:
                            tx = _a.sent();
                            //console.log("TX", tx);
                            assert_1["default"].ok(typeof (tx.confirmations) === "number", "missing confirmations");
                            equals(tx, test);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    Tests.TransactionReceipts.forEach(function (test) {
        it("fetches transaction Receipt: " + test.transactionHash.substring(0, 10), function () {
            return __awaiter(this, void 0, void 0, function () {
                var receipt;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.timeout(60000);
                            return [4 /*yield*/, provider.getTransactionReceipt(test.transactionHash)];
                        case 1:
                            receipt = _a.sent();
                            //console.log("RECEIPT", receipt);
                            assert_1["default"].ok(typeof (receipt.confirmations) === "number", "missing confirmations");
                            equals(receipt, test);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
});
//# sourceMappingURL=index.tests.js.map