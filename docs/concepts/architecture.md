# Oikos Protocol Architecture

Oikos Protocol implements a unique token architecture that ensures price stability, liquidity efficiency, and sustainable market dynamics. This page outlines the core architectural components and how they work together.

## System Overview

![Architecture Diagram](/assets/oikos_bg.svg)

The Oikos token architecture consists of three primary components:

1. **Floor Price Mechanism**: The system that establishes and maintains the guaranteed minimum value
2. **Dynamic Liquidity Engine**: The automated market making and liquidity management system
3. **Utility Framework**: The suite of financial utilities built on top of the token standard

## Floor Price Mechanism

The Floor Price Mechanism (also called Guaranteed Minimum Value or GMV) is the cornerstone of Oikos tokens:

### Key Components

- **Reserve Pool**: Holds the assets that back the floor price guarantee
- **Value Calculator**: Determines the current GMV based on reserves and supply
- **Redemption System**: Allows tokens to be redeemed at floor price
- **Growth Accumulator**: Captures a portion of fees to increase floor price over time

### How It Works

1. A portion of all initial capital is allocated to the Reserve Pool
2. The GMV is calculated as: `Total Reserves ÷ Total Token Supply`
3. As trading fees accumulate, a portion is added to the Reserve Pool
4. This increases the GMV over time, creating a rising price floor
5. The protocol ensures sufficient liquidity is always available at the GMV

## Dynamic Liquidity Engine

The Dynamic Liquidity Engine manages all market making activities automatically:

### Liquidity Ranges

- **Floor Range**: Concentrated at the GMV, ensures redemption capability
- **Anchor Range**: Positioned around the current market price for optimal trading
- **Discovery Range**: Wider spread for price exploration and upside potential

### Key Components

- **Rebalancer**: Periodically adjusts liquidity positions based on market conditions
- **Fee Distributor**: Allocates trading fees between reserves and other protocol functions
- **Position Manager**: Creates, modifies and removes liquidity positions as needed

### How It Works

1. The system analyzes current price, volatility, and trading volume
2. It dynamically adjusts the position and concentration of liquidity
3. During high demand, it deploys more discovery liquidity to allow price growth
4. During downturns, it strengthens floor liquidity to maintain price stability
5. All operations happen automatically via smart contracts, without centralized control

## Utility Framework

The Utility Framework provides financial applications built directly into the token standard:

### Key Components

- **Loan Facility**: Enables borrowing against token holdings
- **Leverage Engine**: Facilitates position amplification
- **Staking Module**: Manages staking operations and rewards
- **Governance Interface**: Enables community governance where applicable

### How It Works

1. Token holders can access built-in utilities directly through the protocol
2. Loans are issued against the GMV of tokens, with no liquidation risk
3. Leverage positions automatically manage loan and purchase operations
4. Staking rewards are distributed from protocol fees
5. All utilities operate within the parameters of the GMV system for safety

## Integration Layer

The Integration Layer connects Oikos tokens to the broader ecosystem:

- **DEX Integration**: Interfaces with decentralized exchanges
- **Bridge Compatibility**: Enables cross-chain functionality
- **Wallet Support**: Ensures compatibility with major wallet providers
- **Indexer Services**: Provides data for analytics and front-end applications

## Security Architecture

Security is foundational to the Oikos Protocol:

- **Formal Verification**: Core contracts are formally verified for correctness
- **Rigorous Testing**: Comprehensive testing across all components
- **Security Audits**: Multiple independent security audits
- **Timelocks**: Delay mechanisms for sensitive operations
- **Multisig Controls**: Multiple-signature requirements for critical functions
- **Transparent Execution**: All operations visible and verifiable on-chain