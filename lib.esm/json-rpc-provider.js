var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { providers, utils } from "ethers";
import { Formatter } from "./formatter";
import { getNetwork } from "./networks";
import { version } from "./_version";
const logger = new utils.Logger(version);
let defaultFormatter = null;
export class JsonRpcProvider extends providers.JsonRpcProvider {
    static getFormatter() {
        console.log("Using mine");
        if (defaultFormatter == null) {
            defaultFormatter = new Formatter();
        }
        return defaultFormatter;
    }
    static getNetwork(networkish) {
        const network = getNetwork((networkish == null) ? "exchain" : networkish);
        if (network == null) {
            return logger.throwError(`unknown network: ${JSON.stringify(network)}`, utils.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "getNetwork",
                value: networkish
            });
        }
        return network;
    }
}
export class StaticJsonRpcProvider extends JsonRpcProvider {
    detectNetwork() {
        const _super = Object.create(null, {
            detectNetwork: { get: () => super.detectNetwork }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let network = this.network;
            if (network == null) {
                network = yield _super.detectNetwork.call(this);
                if (!network) {
                    logger.throwError("no network detected", utils.Logger.errors.UNKNOWN_ERROR, {});
                }
                // If still not set, set it
                if (this._network == null) {
                    // A static network does not support "any"
                    utils.defineReadOnly(this, "_network", network);
                    this.emit("network", network, null);
                }
            }
            return network;
        });
    }
}
export class WebSocketProvider extends providers.WebSocketProvider {
    static getFormatter() {
        console.log("Using mine");
        if (defaultFormatter == null) {
            defaultFormatter = new Formatter();
        }
        return defaultFormatter;
    }
    static getNetwork(networkish) {
        const network = getNetwork((networkish == null) ? "exchain" : networkish);
        if (network == null) {
            return logger.throwError(`unknown network: ${JSON.stringify(network)}`, utils.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "getNetwork",
                value: networkish
            });
        }
        return network;
    }
}
//# sourceMappingURL=json-rpc-provider.js.map