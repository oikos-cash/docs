# Token Creation

The first step in launching your Oikos token is defining its basic properties and configuring its initial parameters. This guide walks you through the token creation process.

## Step 1: Token Identity

![Token Creation Step](/assets/icon1.png)

In this initial step, you'll define the fundamental characteristics of your token:

### Token Name

The full name of your token, which will be visible on block explorers, wallets, and exchanges.

::: tip Requirements
- Must contain at least 3 characters
- Can include letters, numbers, spaces and hyphens
- Cannot contain special characters other than hyphens
- Example: "Oikos Example Token"
:::

### Token Symbol

The ticker symbol for your token, typically 3-5 characters that will represent your token in listings.

::: tip Requirements
- Must contain 2-8 characters
- Should use only uppercase letters (though lowercase is supported)
- Can include numbers but cannot be only numbers
- Cannot contain spaces or special characters
- Example: "OET"
:::

### Token Description

A brief description of your token's purpose and unique value proposition.

::: tip Recommendations
- Keep it concise (150 characters maximum)
- Focus on what makes your token unique
- Include relevant keywords for discoverability
- Example: "Governance token for the Oikos Example Protocol, providing voting rights and fee sharing."
:::

### Website and Social Links

Optional information to help users verify your project's authenticity.

::: tip Recommendations
- Include your project website if available
- Add relevant social media links
- Consider adding documentation links
:::

## Step 2: Token Parameters

### Token Supply

The total number of tokens that will be created at launch.

::: tip Considerations
- All tokens are minted at launch with no future emissions
- Consider your tokenomics carefully as supply cannot be increased later
- Recommended range: 100,000 to 1,000,000,000
:::

### Reserve Asset

The asset that will back your token's floor price.

::: tip Options
- Currently supports BNB
- Additional options will be available in future updates
:::

### Initial Floor Price

The starting guaranteed minimum value for your token.

::: tip Guidance
- Sets the initial redemption value of each token
- Must be greater than 0
- Determines how much of the reserve asset is needed
- Lower floor price requires less initial capital
:::

## Step 3: Distribution Plan

### Team Allocation

Percentage of tokens allocated to project team and development.

::: tip Recommendations
- Typical range: 10-20%
- Consider using time locks for team allocations
- Transparent allocations build community trust
:::

### Public Launch Allocation

Percentage of tokens available during the initial launch event.

::: tip Recommendations
- Typical range: 30-60%
- Higher percentages create more accessible launch events
- Consider community fairness in your allocation
:::

### Community/Marketing Allocation

Percentage of tokens reserved for community building and marketing efforts.

::: tip Recommendations
- Typical range: 5-15%
- Can be used for airdrops, competitions, and incentives
- Important for building initial community engagement
:::

## Advanced Configuration

For teams looking for more customization, additional options are available:

### Custom Fee Structure

Adjust the fee distribution between floor price growth and other protocol utilities.

### Liquidity Distribution

Fine-tune how liquidity is distributed across the floor, anchor, and discovery ranges.

### Time Locks

Configure time-based restrictions for specific token allocations.

## Technical Implementation

Behind the scenes, Oikos will:

1. Deploy a standard ERC-20 compatible token contract
2. Create the reserve pool backed by your chosen asset
3. Establish initial liquidity positions
4. Configure the floor price mechanism
5. Enable utility functions (loans, leverage, staking)

All tokens will be created with full Oikos functionality, including guaranteed floor price, dynamic liquidity, and built-in utility features.

## Next Steps

After configuring your token, proceed to [Pool Settings](/launchpad/pool-settings) to finalize the liquidity configuration and prepare for launch.