Ancillary Package: ExChain
==========================

[![npm version](https://badge.fury.io/js/%40ethers-ancillary%2Fexchain.svg)](https://www.npmjs.com/package/@ethers-ancillary/exchain)

**Experimental:** This packages is still in the early stages
of the ancillary package template and the library has not
been thoroughly tested.

An ancillary package for ExChain.


Installing and Importing
------------------------

**Node**

```
/home/ricmoo> npm install @ethers-ancillary/exchain
```

```javascript
// JavaScript
const { JsonRpcProvider } = require("@ethers-ancillary/exchain");

// TypeScript
import { JsonRpcProvider } from "@ethers-ancillary/exchain";
```

**Browser**

Include the ESM module (exchain.esm.js) in the same folder as the
core library (i.e. ethers.esm.min.js) and import using:

```html
<script type="module">
  import { JsonRpcProvider } from "./exchain.esm.js";
</script>
```


Application Programming Interface (API)
---------------------------------------

**JsonRpcProvider**

The API for this provider is identical to the [JsonRpcProvider](https://docs.ethers.io/v5/api/providers/jsonrpc-provider/#JsonRpcProvider),
except it uses a formatter compatible with ExChain's transaction hashing
algorithm.


License
-------

MIT License.
