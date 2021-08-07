"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNetwork = exports.StaticJsonRpcProvider = exports.JsonRpcProvider = void 0;
const json_rpc_provider_1 = require("./json-rpc-provider");
Object.defineProperty(exports, "JsonRpcProvider", { enumerable: true, get: function () { return json_rpc_provider_1.JsonRpcProvider; } });
Object.defineProperty(exports, "StaticJsonRpcProvider", { enumerable: true, get: function () { return json_rpc_provider_1.StaticJsonRpcProvider; } });
const networks_1 = require("./networks");
Object.defineProperty(exports, "getNetwork", { enumerable: true, get: function () { return networks_1.getNetwork; } });
//# sourceMappingURL=index.js.map