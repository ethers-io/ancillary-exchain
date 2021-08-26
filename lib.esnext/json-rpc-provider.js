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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaticJsonRpcProvider = exports.JsonRpcProvider = void 0;
const ethers_1 = require("ethers");
const formatter_1 = require("./formatter");
const networks_1 = require("./networks");
const _version_1 = require("./_version");
const logger = new ethers_1.utils.Logger(_version_1.version);
let defaultFormatter = null;
class JsonRpcProvider extends ethers_1.providers.JsonRpcProvider {
    static getFormatter() {
        if (defaultFormatter == null) {
            defaultFormatter = new formatter_1.Formatter();
        }
        return defaultFormatter;
    }
    static getNetwork(networkish) {
        const network = networks_1.getNetwork((networkish == null) ? "exchain" : networkish);
        if (network == null) {
            return logger.throwError(`unknown network: ${JSON.stringify(network)}`, ethers_1.utils.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "getNetwork",
                value: networkish
            });
        }
        return network;
    }
}
exports.JsonRpcProvider = JsonRpcProvider;
class StaticJsonRpcProvider extends JsonRpcProvider {
    detectNetwork() {
        const _super = Object.create(null, {
            detectNetwork: { get: () => super.detectNetwork }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let network = this.network;
            if (network == null) {
                network = yield _super.detectNetwork.call(this);
                if (!network) {
                    logger.throwError("no network detected", ethers_1.utils.Logger.errors.UNKNOWN_ERROR, {});
                }
                // If still not set, set it
                if (this._network == null) {
                    // A static network does not support "any"
                    ethers_1.utils.defineReadOnly(this, "_network", network);
                    this.emit("network", network, null);
                }
            }
            return network;
        });
    }
}
exports.StaticJsonRpcProvider = StaticJsonRpcProvider;
//# sourceMappingURL=json-rpc-provider.js.map