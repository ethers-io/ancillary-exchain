
import { providers, utils } from "ethers";

import { Formatter } from "./formatter";
import { getNetwork } from "./networks";

import { version } from "./_version";
const logger = new utils.Logger(version);

let defaultFormatter: null | Formatter = null;

export class JsonRpcProvider extends providers.JsonRpcProvider {

    static getFormatter(): Formatter {
        console.log("Using mine");
        if (defaultFormatter == null) {
            defaultFormatter = new Formatter();
        }

        return defaultFormatter;
    }

    static getNetwork(networkish: providers.Networkish): providers.Network {
        const network = getNetwork((networkish == null) ? "exchain": networkish);
        if (network == null) {
            return logger.throwError(`unknown network: ${ JSON.stringify(network) }`, utils.Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "getNetwork",
                value: networkish
            });
        }
        return network;
    }
}

export class StaticJsonRpcProvider extends JsonRpcProvider {
    async detectNetwork(): Promise<providers.Network> {
        let network = this.network;
        if (network == null) {
            network = await super.detectNetwork();

            if (!network) {
                logger.throwError("no network detected", utils.Logger.errors.UNKNOWN_ERROR, { });
            }

            // If still not set, set it
            if (this._network == null) {
                // A static network does not support "any"
                utils.defineReadOnly(this, "_network", network);

                this.emit("network", network, null);
            }
        }
        return network;
    }
}
