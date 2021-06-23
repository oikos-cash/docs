# Incentives

Here is an overview of the incentives and token flow in the Oikos system. It is built around incentives; users who benefit from a service pay other users who enable that service. This section will explain each category of rewards as well as each acting party within the system.

## Sources of Value

### Exchange Fees

Exchange fees are generated whenever a user exchanges one synthetic asset (Synth) for another through [Oikos.Exchange](https://oikos.exchange). Fees are typically between 10-100 bps (0.1%-1%), though usually 30 bps (0.3%), and when generated are sent to the fee pool, where it is available to be claimed proportionally by OKS stakers each week.

### OKS Staking Rewards

OKS staking rewards are generated through the inflationary monetary policy. At the same time as they claim their exchange fees stakers can claim their staking rewards, which are escrowed for a year. The OKS staking rewards enabled by the inflationary supply are set to decrease gradually until December 2024, where it will become a 2.5% annual terminal inflation rate.

### Liquidity Rewards

5% of the aforementioned inflationary OKS supply is distributed to people providing oUSD/BNB liquidity on [Pancake Swap](https://exchange.pancakeswap.finance/#/add/BNB/0x6bf2be9468314281cd28a94c35f967cafd388325) and [Derive Finance](https://derive.fi/#/deposit/usd). This is to ensure there is a clear way for traders to enter the system and start trading for the first time (if they hold BNB).

## Value Recipients

### OKS Stakers

OKS stakers stake their OKS and receive two kinds of rewards: exchange fees and OKS staking rewards. But by staking, they also take on the risk of 'debt.' When someone stakes their OKS, to then immediately unstake it they need to burn as much oUSD as they just minted — this oUSD figure is their debt, and all OKS stakers' debt is pooled together (with each staker holding a proportion of it). But this pooled debt is also where profits and losses from people trading on Oikos.Exchange is represented, so a staker's debt can change over time depending on traders' overall profits and losses. This is the risk they assume when staking their OKS.

### BNB stakers

It is also possible to mint Synths by staking . However, BNB stakers' debt is denominated in BNB rather than oUSD. It does not get added to the system's pooled debt, and thus does not fluctuate depending on traders' outcomes. However, there is a 5% APR to stake BNB, as well as a small minting fee.

### Traders

Traders on Oikos.Exchange can take advantage of the system enabled by OKS stakers, namely trading a wide variety of assets with infinite liquidity and no slippage. They do not need to stake or even hold OKS.

### Liquidity Providers

Liquidity providers are providing depth to the [oUSD/BNB Pancake Swap liquidity pool](https://bscscan.com/address/0xcb947258d38f45fffb53e7930f38cb8b6dc69d4f#tokentxns) and to the [oUSD Derive Finance liquidity pool](https://derive.fi/#/deposit/usd). The deeper this pool, the less slippage traders pay when entering or exiting the system. Liquidity providers do not need to stake or hold OKS, only BNB, oUSD and several other stable coins, e.g. [Binance-Peg BSC-USD](https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56), [Binance-Peg Dai Token](https://bscscan.com/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3), [Binance-Peg USD Coin](https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d). To receive rewards they must [stake their Oikos LP tokens](https://oikoscash.medium.com/new-lp-rewards-apr-indicator-e59391a85816) into a purpose-built smart contract.

### Arbitrageurs

The primary opportunity for arbitrage in Oikos is taking advantage of underpriced assets on the secondary market. If oUSD is ever trading below the price of USD, then stakers can profit by purchasing them cheaply and using them within the Oikos system, where their values do not take the market rate into consideration.

## Additional Crypto-economic Discussions

For more information and discussions on incentives, please see the lateset entries in our blog: [blog.oikos.cash](https://blog.oikos.cash).
