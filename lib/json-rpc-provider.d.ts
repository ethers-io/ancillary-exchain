import { providers } from "ethers";
import { Formatter } from "./formatter";
export declare class JsonRpcProvider extends providers.JsonRpcProvider {
    static getFormatter(): Formatter;
    static getNetwork(networkish: providers.Networkish): providers.Network;
}
export declare class StaticJsonRpcProvider extends JsonRpcProvider {
    detectNetwork(): Promise<providers.Network>;
}
