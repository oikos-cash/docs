# Liquidity & Economics Configuration

After defining your token's basic properties, the next step is configuring its economic parameters and liquidity settings. This critical phase determines how your token will function in the market and sets the foundation for its long-term sustainability.

![Pool Settings](/assets/icon4.png)

## Market-Making Parameters

### Guaranteed Minimum Value (GMV)

The GMV is the foundation of your token's price stability and represents the guaranteed floor price below which your token cannot trade.

::: tip Key Concepts
- All tokens are backed by this minimum value in the reserve asset
- The GMV can only increase over time, never decrease
- Trading fees automatically contribute to GMV growth
- Tokens can always be redeemed at the current GMV
:::

When setting your initial GMV, consider:
- Higher GMVs require more initial capital but provide stronger price protection
- Lower GMVs allow for more accessible token launches
- The GMV should reflect a reasonable baseline value for your token

### Liquidity Distribution

Configure how your token's liquidity is distributed across different price ranges:

#### Floor Range

Liquidity concentrated tightly around the GMV.

::: tip Configuration Options
- Percentage of total liquidity (recommended: 20-40%)
- Concentration factor (how tightly packed around the GMV)
- Acts as the primary safety mechanism ensuring redemption capability
:::

#### Anchor Range

Liquidity positioned around the expected trading price.

::: tip Configuration Options
- Percentage of total liquidity (recommended: 40-60%)
- Price positioning (how far above the GMV)
- Width of the range (trading flexibility)
- Creates a stable trading environment with minimal slippage
:::

#### Discovery Range

Liquidity deployed to enable upward price movement.

::: tip Configuration Options
- Percentage of total liquidity (recommended: 10-30%)
- Upper bound multiplier (how high above anchor price)
- Facilitates price discovery while maintaining reasonable slippage
:::

## Economic Parameters

### Trading Fees

Fees collected from all trading activity that contribute to the protocol's sustainability.

::: tip Configuration Options
- GMV Growth Allocation: Percentage of fees directed to increasing the GMV (recommended: 30-50%)
- Staking Rewards: Percentage directed to token stakers (recommended: 20-40%)
- Protocol Development: Percentage for ongoing development (recommended: 10-30%)
:::

### Rebalancing Settings

Parameters that control how and when the protocol adjusts liquidity positions.

::: tip Configuration Options
- Rebalance Frequency: How often positions are reoptimized
- Price Deviation Threshold: Market moves that trigger rebalancing
- Target Concentration: How aggressively to optimize for current price
:::

## Capital Requirements

Based on your configuration, the system will calculate the required capital for launch:

1. **Reserve Requirement**: Capital needed to back the GMV for all tokens
2. **Liquidity Provision**: Additional capital for effective market making
3. **Total Launch Requirement**: Total capital needed to initialize your token

::: warning Important Note
The capital requirements displayed represent the minimum necessary for a successful launch. Providing additional capital beyond the minimum will create deeper liquidity and more resilient price action.
:::

## Advanced Settings

For projects with specific needs, advanced configuration options are available:

### Custom Price Curves

Design specialized liquidity curves for unique trading characteristics.

### Fee Allocation Adjustments

Fine-tune how protocol fees are distributed among different functions.

### Rebalance Triggers

Set custom events that prompt liquidity reoptimization.

## Simulation and Testing

Before finalizing your settings, use the built-in simulation tools to:

- Visualize expected price behavior under different market conditions
- Estimate GMV growth rates based on projected trading volume
- Test how your token responds to various market scenarios

## Next Steps

After configuring your token's economics and liquidity parameters, proceed to:
- [Presale Configuration](/launchpad/presale-configuration) if you're conducting an initial token offering
- Final review and deployment if you're launching without a presale