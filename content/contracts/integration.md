# Integration Guide

!!! Tip "Who this guide is for"

    This is a guide for smart contract developers looking into integrate one or more of Oikos's contracts into their own contracts. Please read the below thoroughly and ask for help in the `#dev-portal` channel of our [Discord](https://discordapp.com/channels/413890591840272394/).

    If instead you're looking to integrate Oikos into your dApps and scripts, please see our [libraries section](../libraries/index.md).

## Proxies

Oikos makes extensive use of the proxy pattern. This allows users and integrated systems to refer to immutable proxy addresses while the underlying functionality is passed through to the target or _underlying_ contracts which can be updated by an `owner` function. This allows for fast iteration of the Oikos ecosystem at the cost of trust in the protocol.

!!! Info "Decentralize All the Things"

    In order for Oikos to become a fully decentralized protocol, these upgradable proxy contracts need more oversight and constraint. Please read our blogpost for the path towards full decentralization and how the Proxy architecture is impacted: https://blog.oikos.cash/transition-to-decentralised-governance/ (see *Protocol Changes*)

As of this moment, the following contracts are behind proxies:

- `FeePool` is behind `ProxyFeePool`
- `Oikos` is behind both `ProxySynthetix` (deprecated, see notice below) and `ProxyERC20`
- `SynthsUSD` is behind both `ProxysUSD` (deprecated) and `ProxyERC20sUSD`
- All remaining synths are also behind a Proxy, all of which are the newer ProxyERC20 pattern. e.g. `ProxysTRX`, `ProxyiBTC`, etc.

!!! Warning "Deprecation Notice"

    The current proxies have been marked deprecated:

    - [Oikos](https://contracts.oikos.cash/ProxySynthetix) (aka `ProxySynthetix` at `0xC011A72400E58ecD99Ee497CF89E3775d4bd732F`) and
    - [sUSD](https://contracts.oikos.cash/ProxysUSD) (aka `ProxysUSD` at `0x57Ab1E02fEE23774580C119740129eAC7081e9D3`)

    The current proxies use the CALL pattern and set `messageSender` on the target for any request (see [here](https://github.com/Synthetixio/oikos/blob/master/contracts/Proxy.sol#L118)). This mutation inside functions that are marked `view` - such as `balanceOf`, break ERC20 interface conventions, and thus fail.

    In their stead we have new *integration* proxies in place, used by both Oikos Swap and Kyber. The new integration proxies are fully ERC20 compliant and explictly call through to the target for all ERC20 functions (see [ProxyERC20.sol](https://github.com/Synthetixio/oikos/blob/master/contracts/ProxyERC20.sol)).

    If you are planning any integration with Oikos, it is recommended that you use the newer proxies:

    - [Oikos](https://contracts.oikos.cash/ProxyERC20) (aka `ProxyERC20` at `0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F`) and
    - [sUSD](https://contracts.oikos.cash/ProxyERC20sUSD) (aka `ProxyERC20sUSD` at `0x57Ab1ec28D129707052df4dF418D58a2D46d5f51`)

    That said however, both are functioning side by side while we transition over.

    One note of caution: the events from the underlying contracts - `Oikos` and `Synth` are still emitted on the currently deprecated proxy contracts. Indeed, SynthetixJs still use the deprecated proxies for this reason (see [Oikos.js](https://github.com/Synthetixio/oikos-js/blob/master/src/contracts/mainnet/Oikos.js#L12)). Once we migrate to the new proxies, the events will be emitted on the integration proxies and the deprecated ones will be removed entirely.

## Fee Reclamation and Atomicity of Exchanges

In our Achernar release, we introduced Fee Reclamation ([SIP-37](https://sips.oikos.cash/sips/sip-37)). The major implication here is that if you invoke `exchange(src, amount, dest)` in your smart contracts, you cannot atomically invoke `dest.transfer()` or `exchange(dest, ..., ...)` - both will fail until a waiting period expires.

You can use [`Exchanger.maxSecsLeftInWaitingPeriod()`](/contracts/exchanger/#maxsecsleftinwaitingperiod) to check how many seconds are left in the waiting period for that `dest` synth. Once it's `0`, exchanges of the `dest` synth will automatically settle any rebates or reclaims. However after the waiting period expires, `dest.transfer()` will fail regardless if there are any exchanges awaiting settlement. To circumvent this, integrators are encouraged to use [`transferAndSettle`](/contracts/synth/#transferandsettle) or [`transferFromAndSettle`](/contracts/synth/#transferfromandsettle). Alternatively, [`Exchanger.settle()`](/contracts/exchanger#settle) can be invoked directly prior to a `transfer` or `transferFrom`.

## Address Resolver

In our Achernar release, we introduced a new feature called the `AddressResolver` contract ([contracts.oikos.cash/AddressResolver](https://contracts.oikos.cash/AddressResolver)).

In short, the `AddressResolver` allows any referencing contract to have access to a number of key contract - in particular the underlying `Oikos`, `FeePool`, `SynthsUSD` and `SynthsTRX` contracts. There are plans in the near future to add our proxies as well.

!!! danger "Be Advised"

    Third party developers may well want to integrate this `AddressResolver` into their smart contracts if they want to look up the latest contracts on-chain, and they are most welcome to. That being said, be careful - the Oikos protocol may opt to change the ABIs of the underlying contracts which could break interoperability for contracts that are not re-deployed. The safest third party use are the ERC20 functions within `Oikos` and all the `Synth` contracts.
