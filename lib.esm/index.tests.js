var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from "assert";
import fs from "fs";
import { resolve } from "path";
import { BigNumber, ethers } from "ethers";
import { JsonRpcProvider } from ".";
const Tests = {
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
            gasLimit: BigNumber.from("0xffffffff"),
            gasUsed: BigNumber.from("0x00"),
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
            gasPrice: BigNumber.from("0x05f5e100"),
            gasLimit: BigNumber.from("0x7b0c"),
            to: '0x8522395fdca22e59b6F8d0bA2579ACd5877f50b7',
            value: BigNumber.from("0x01"),
            nonce: 9,
            data: '0x',
            r: '0xaf9fdcfbf62763ab76d7fbdec8920c6e13ca6b70b673d106fb28a504acc9dc43',
            s: '0x13fdb9206daba92298ff5c293ea2ed5507407b97cf4dc21c562db40a06932d8a',
            v: 166,
            creates: null,
            chainId: 65,
        },
    ],
    TransactionReceipts: [
        {
            to: '0x8522395fdca22e59b6F8d0bA2579ACd5877f50b7',
            from: '0x8522395fdca22e59b6F8d0bA2579ACd5877f50b7',
            contractAddress: null,
            transactionIndex: 0,
            gasUsed: BigNumber.from("0x5208"),
            logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            blockHash: '0xd441ff6d99de0a314e88357a1230a1968e78aea3e1284774148947fee3489bdc',
            transactionHash: '0xfb7b98aaf9028866eb0308a4e9ddf8388278870af524ae30665d3113458728e2',
            logs: [],
            blockNumber: 7269402,
            cumulativeGasUsed: BigNumber.from("0x5208"),
            status: 1,
            type: 0,
            byzantium: true
        },
    ],
};
function _equals(path, actual, expected) {
    if (expected === null) {
        assert.equal(actual, expected, `expected null: ${path}!null`);
    }
    else if (BigNumber.isBigNumber(expected)) {
        assert.ok(BigNumber.isBigNumber(actual), `expected BigNumber instance: ${path}!BigNumber`);
        assert.ok(expected.eq(actual), `BigNumber not equal: ${path}!a.eq(e)`);
    }
    else if (typeof (expected) === "object") {
        assert.ok(typeof (actual) === "object", `expected object: ${path}!object`);
        for (const key in expected) {
            _equals(`${path}@${key}/`, actual[key], expected[key]);
        }
    }
    else if (Array.isArray(expected)) {
        assert.ok(Array.isArray(actual), `expected an array: ${path}!array`);
        assert.equal(expected.length, actual.length, `array length mismatch: ${path}a.length!=e.length`);
        expected.forEach((item, index) => {
            _equals(`${path}#${index}/`, actual[index], expected[index]);
        });
    }
    else {
        assert.equal(actual, expected, `not equal: ${path}a!=b`);
    }
}
export function equals(actual, expected) {
    _equals("/", actual, expected);
    return true;
}
describe("Test ExchainProvider", function () {
    const provider = new JsonRpcProvider("https:/\/exchaintestrpc.okex.org");
    // A secret we can use in our testcases for wallets and such
    const secret = (function () {
        try {
            return JSON.parse(fs.readFileSync(resolve(__dirname, "../env.json")).toString()).secret;
        }
        catch (error) {
            console.log("No secret", error);
        }
        return null;
    })();
    if (secret) {
        const wallet = new ethers.Wallet(ethers.utils.id(secret), provider);
        it("Displays secret account details", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(60000);
                console.log("Wallet:", wallet.address);
                console.log("Balance", ethers.utils.formatEther(yield wallet.getBalance()));
            });
        });
        it("Sends a transaction", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(180000);
                const tx = yield wallet.sendTransaction({ to: wallet.address, value: 1 });
                console.log(tx);
                yield tx.wait();
            });
        });
        const bytecode = "0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b6100556004803603810190610050919061009d565b610075565b005b61005f61007f565b60405161006c91906100d9565b60405180910390f35b8060008190555050565b60008054905090565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea26469706673582212207c54d252a58b2a42da91ec168afc7481043a6b01121ba19e19e4343be3decc7564736f6c63430008070033";
        const runtimeBytecode = "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b6100556004803603810190610050919061009d565b610075565b005b61005f61007f565b60405161006c91906100d9565b60405180910390f35b8060008190555050565b60008054905090565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea26469706673582212207c54d252a58b2a42da91ec168afc7481043a6b01121ba19e19e4343be3decc7564736f6c63430008070033";
        const abi = [
            "function set(uint256)",
            "function get() view returns (uint)"
        ];
        it("Deploys a ccontract", function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(180000);
                const factory = new ethers.ContractFactory(abi, bytecode, wallet);
                const contract = yield factory.deploy();
                yield contract.deployTransaction.wait();
                const data = yield provider.getCode(contract.address);
                assert.equal(data, runtimeBytecode, "deployed bytecode is correct");
            });
        });
    }
    it("Fetches Block Number", function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(60000);
            const blockNumber = yield provider.getBlockNumber();
            assert.ok(typeof (blockNumber) === "number");
            /*
            console.log("Block Number:", blockNumber);
            // Use this to find blocks with transactions for tests
            let scan = blockNumber;
            while (true) {
                scan++;
                const block = await provider.getBlock(scan);
                console.log("BLOCK", block);
            }
            */
        });
    });
    Tests.Blocks.forEach((test) => {
        it(`fetches block #${test.number}`, function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(60000);
                const block = yield provider.getBlock(test.number);
                //console.log("BLOCK", block);
                equals(block, test);
            });
        });
    });
    Tests.Transactions.forEach((test) => {
        it(`fetches transaction: ${test.hash.substring(0, 10)}`, function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(60000);
                const tx = yield provider.getTransaction(test.hash);
                //console.log("TX", tx);
                assert.ok(typeof (tx.confirmations) === "number", "missing confirmations");
                equals(tx, test);
            });
        });
    });
    Tests.TransactionReceipts.forEach((test) => {
        it(`fetches transaction Receipt: ${test.transactionHash.substring(0, 10)}`, function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(60000);
                const receipt = yield provider.getTransactionReceipt(test.transactionHash);
                //console.log("RECEIPT", receipt);
                assert.ok(typeof (receipt.confirmations) === "number", "missing confirmations");
                equals(receipt, test);
            });
        });
    });
});
//# sourceMappingURL=index.tests.js.map