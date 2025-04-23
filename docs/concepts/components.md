# Core Components

Oikos Protocol consists of several specialized components that work together to create sustainable token markets. This page describes the key components and their functions.

## Token Foundation Components

### Reserve Pool

The Reserve Pool is the backbone of Oikos tokens, providing the floor price guarantee:

- Holds reserve assets (BNB, ETH, etc.) that back the token's floor price
- Accumulates a portion of trading fees to grow over time
- Enables direct redemption of tokens at the floor price
- Provides capital for the protocol's market-making activities

### Liquidity Manager

The Liquidity Manager orchestrates all market-making activities:

- **Position Factory**: Creates and manages concentrated liquidity positions
- **Distribution Controller**: Determines optimal liquidity allocation across price ranges
- **Rebalance Engine**: Periodically adjusts positions based on market conditions
- **Fee Collector**: Captures and distributes trading fees

### Price Discovery System

The Price Discovery System maintains efficient price formation:

- Balances supply and demand through strategic liquidity deployment
- Facilitates smooth price movement through optimized slippage curves
- Prevents extreme volatility while allowing natural price discovery
- Provides resistance against market manipulation

## Utility Components

### Loan Facility

The Loan Facility enables borrowing against token holdings:

- **Collateral Valuer**: Assesses token value based on floor price
- **Loan Originator**: Creates and manages loan positions
- **Fee Calculator**: Determines one-time loan fees
- **Repayment Processor**: Handles full or partial loan repayments

### Leverage Engine

The Leverage Engine facilitates amplified market exposure:

- **Loop Creator**: Combines loans with token purchases for leveraged positions
- **Position Monitor**: Tracks leverage levels and floor price changes
- **Auto-Adjuster**: Updates position parameters as floor price increases
- **Liquidation Protector**: Ensures positions remain protected by floor price

### Staking Module

The Staking Module manages token staking and rewards:

- **Stake Manager**: Handles deposit and withdrawal of staked tokens
- **Reward Distributor**: Allocates protocol fees to stakers
- **Lock Mechanism**: Provides boosted rewards for longer commitment periods
- **Governance Interface**: Enables participation in applicable governance decisions

## Integration Components

### Exchange Integrator

The Exchange Integrator connects Oikos tokens to decentralized exchanges:

- **Uniswap V3 Adapter**: Manages positions on Uniswap/PancakeSwap
- **Order Router**: Optimizes trade execution
- **Liquidity Metrics**: Monitors and reports on liquidity conditions
- **Performance Analyzer**: Tracks market-making performance

### Cross-Chain Bridge

The Cross-Chain Bridge enables multi-chain functionality:

- **Message Relayer**: Securely transmits data between chains
- **Asset Converter**: Handles asset wrapping and unwrapping
- **Validation System**: Ensures transaction integrity
- **Fee Handler**: Manages cross-chain transaction fees

## Technical Infrastructure

### Smart Contract System

The Smart Contract System provides the technical foundation:

- **Core Contracts**: Implement core functionality and business logic
- **Proxy Architecture**: Enables upgradability while maintaining state
- **Library System**: Provides reusable code for efficiency and security
- **Event Framework**: Emits structured events for off-chain monitoring

### Security Framework

The Security Framework ensures protocol safety:

- **Access Control**: Manages permissions and authorization
- **Oracle Guards**: Protects against oracle manipulation
- **Circuit Breakers**: Provides emergency shutdown capability
- **Audit System**: Maintains transparency and verifiability

## Component Interactions

![Component Diagram](/assets/icon2.png)

The Oikos components work together in a coordinated system:

1. The **Reserve Pool** provides the foundation for the **Floor Price Mechanism**
2. The **Liquidity Manager** interacts with exchanges through the **Exchange Integrator**
3. The **Utility Components** leverage the **Floor Price Mechanism** for secure financial operations
4. The entire system is protected by the **Security Framework**

Each component is designed with clear interfaces and responsibilities, allowing for modular upgrades and extensions as the protocol evolves.