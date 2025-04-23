# Initial Guaranteed Minimum Value (IGMV) Event

The IGMV Event is a crucial mechanism for launching your Oikos token, establishing its initial floor price, and raising the capital needed to create sustainable market dynamics. This process enables a fair and transparent token launch while ensuring proper price discovery.

![IGMV Configuration](/assets/icon2.png)

## What is an IGMV Event?

An IGMV Event is the initial offering phase where:

- Capital is raised to back your token's guaranteed floor price
- The starting token price is established through market demand
- Early supporters can acquire tokens at advantageous rates
- The foundation for sustainable tokenomics is created

Unlike traditional presales or ICOs, all capital raised goes directly into the protocol's Reserve Pool, permanently backing the token's floor price and providing capital for automated market making.

## Configuration Options

### Event Duration

Set how long your IGMV Event will remain active:

::: tip Options
- 24 hours (for high-demand, well-marketed launches)
- 3 days (standard option for most projects)
- 7 days (provides more time for community participation)
- 14 days (maximum duration for extended participation)
:::

Choosing the right duration depends on your marketing readiness, community size, and urgency. Shorter periods create more urgency but require stronger initial marketing.

### Participation Caps

Limits on individual participation to ensure fair distribution:

::: tip Configuration Options
- Individual Minimum: Smallest amount participants can contribute
- Individual Maximum: Largest amount any single wallet can contribute
- Total Cap: Maximum amount the event will accept in total
:::

Setting appropriate caps helps prevent whale dominance and encourages wider token distribution.

### Allowlist Options

Control who can participate in your token launch:

::: tip Options
- Open Participation: Anyone can join (most accessible)
- Allowlist Only: Restricted to pre-approved addresses 
- Tiered Participation: Different caps for different participant tiers
:::

Allowlists help ensure your token reaches your target community first.

### Price Mechanics

Configure how token pricing works during the event:

#### Fixed Price Model

A simple model with a predetermined token price.

::: tip Configuration
- Set a fixed price per token
- All participants receive tokens at the same rate
- Simplest approach for most projects
:::

#### Dutch Auction Model

A declining price model that starts high and gradually decreases.

::: tip Configuration
- Starting Price: Initial high price point
- Ending Price: Final price floor
- Decline Rate: How quickly price decreases
- Creates price discovery while maximizing value
:::

#### Bonding Curve Model

Price increases as more tokens are sold, rewarding early participants.

::: tip Configuration
- Curve Parameters: Control steepness of price increase
- Starting Price: Sets initial entry point
- Rewards early participation while capturing value for later demand
:::

## Reserve Allocation

The IGMV Event determines how capital is allocated to different liquidity ranges:

1. **Floor Reserves**: Portion dedicated to backing the GMV (typically 30-50%)
2. **Anchor Liquidity**: Portion for trading around expected price (typically 30-50%)
3. **Discovery Liquidity**: Portion for facilitating upward price movement (typically 10-30%)

## Post-Event Process

After your IGMV Event concludes, the following automatic processes occur:

1. Final floor price is established based on raised capital and token supply
2. Liquidity positions are created across the configured ranges
3. Market-making begins with protocol-managed positions
4. Token trading is enabled on the exchange
5. Built-in utility features (loans, leverage, staking) are activated

## Strategic Considerations

When configuring your IGMV Event, consider:

- **Community Readiness**: Ensure your community is prepared and informed
- **Marketing Timeline**: Coordinate marketing efforts with your event launch
- **Capital Requirements**: Balance between accessibility and sufficient backing
- **Initial Distribution**: Create a healthy distribution across many participants
- **Long-term Vision**: Set parameters aligned with your project's future goals

## Success Metrics

Your IGMV Event's success can be measured by:

- Capital raised relative to target
- Number of unique participants
- Distribution evenness across participants
- Post-event market stability and trading volume
- Community engagement and satisfaction

## Next Steps

After configuring your IGMV Event, proceed to the final review stage where you'll confirm all parameters before launching your token.