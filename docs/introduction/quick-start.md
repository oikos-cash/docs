# Quick Start Guide

This quick start guide will walk you through the essential steps to get up and running with Oikos Protocol in just a few minutes.

## 1. Connect Your Wallet

```javascript
// Using the Oikos SDK
import { Oikos } from '@oikos/sdk';

const oikos = new Oikos({
  provider: window.ethereum, // or any Web3 provider
  chainId: 1, // Ethereum Mainnet
});

// Connect wallet
const connect = async () => {
  try {
    const accounts = await oikos.connect();
    console.log('Connected account:', accounts[0]);
  } catch (error) {
    console.error('Connection failed:', error);
  }
};
```

## 2. Check Account Balances

```javascript
// Check balances
const getBalances = async () => {
  try {
    const account = await oikos.getConnectedAccount();
    const balances = await oikos.getBalances(account);
    console.log('Account balances:', balances);
  } catch (error) {
    console.error('Failed to fetch balances:', error);
  }
};
```

## 3. Execute a Trade

```javascript
// Execute a swap
const executeSwap = async () => {
  try {
    const result = await oikos.swap({
      fromToken: '0x...', // Token address
      toToken: '0x...', // Token address
      amount: '1000000000000000000', // 1 token with 18 decimals
      slippageTolerance: 0.5, // 0.5%
    });
    console.log('Swap executed:', result.transactionHash);
  } catch (error) {
    console.error('Swap failed:', error);
  }
};
```

## 4. Provide Liquidity

```javascript
// Add liquidity
const addLiquidity = async () => {
  try {
    const result = await oikos.addLiquidity({
      tokenA: '0x...', // Token A address
      tokenB: '0x...', // Token B address
      amountA: '1000000000000000000', // 1 token with 18 decimals
      amountB: '1000000000000000000', // 1 token with 18 decimals
    });
    console.log('Liquidity added:', result.transactionHash);
  } catch (error) {
    console.error('Failed to add liquidity:', error);
  }
};
```

## 5. Stake Tokens

```javascript
// Stake tokens
const stakeTokens = async () => {
  try {
    const result = await oikos.stake({
      token: '0x...', // Token address
      amount: '1000000000000000000', // 1 token with 18 decimals
      duration: 30, // days
    });
    console.log('Tokens staked:', result.transactionHash);
  } catch (error) {
    console.error('Staking failed:', error);
  }
};
```

## 6. View Portfolio

```javascript
// Get portfolio data
const getPortfolio = async () => {
  try {
    const account = await oikos.getConnectedAccount();
    const portfolio = await oikos.getPortfolio(account);
    console.log('Portfolio value:', portfolio.totalValue);
    console.log('Assets:', portfolio.assets);
    console.log('Positions:', portfolio.positions);
  } catch (error) {
    console.error('Failed to fetch portfolio:', error);
  }
};
```

## 7. Monitor Events

```javascript
// Listen for events
const listenForEvents = () => {
  oikos.on('Swap', (event) => {
    console.log('Swap event:', event);
  });
  
  oikos.on('LiquidityAdded', (event) => {
    console.log('Liquidity added event:', event);
  });
  
  oikos.on('Staked', (event) => {
    console.log('Staked event:', event);
  });
};
```

## Next Steps

Now that you've completed the quick start guide, you can:

- Explore the [API Reference](/developers/api) for more detailed documentation
- Check out our [Examples](/developers/examples) for real-world use cases
- Learn about [Advanced Features](/concepts/advanced-features) of the protocol
- Join our [Developer Community](/community/developers) to connect with other builders

Happy building with Oikos Protocol!