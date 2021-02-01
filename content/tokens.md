
# Tokens

## Australian Dollars (sAUD)

**Address:** [TVMvaKYENjbmgJYn7WcaLJqcdbKnyHTWyM](https://tronscan.io/#/address/TVMvaKYENjbmgJYn7WcaLJqcdbKnyHTWyM)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Australian Dollars (AUD) through price feeds supplied by an oracle.

## Bitcoin (sBTC)

**Address:** [TTZdYV9mtJa5LenGGNh4hr3WZetmCtmS53](https://tronscan.io/#/address/TTZdYV9mtJa5LenGGNh4hr3WZetmCtmS53)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Bitcoin (BTC) through price feeds supplied by an oracle.

## ChainLink token (sLINK)

**Address:** [TVCwBkeuRPaM4ZyKBywgoQZDYYxPh1HjJ5](https://tronscan.io/#/address/TVCwBkeuRPaM4ZyKBywgoQZDYYxPh1HjJ5)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of ChainLink token (LINK) through price feeds supplied by an oracle.

## Ether (sETH)

**Address:** [TQ3UnKu9aRqHN2tnwkSUj2aXmswc4emygc](https://tronscan.io/#/address/TQ3UnKu9aRqHN2tnwkSUj2aXmswc4emygc)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Ether (ETH) through price feeds supplied by an oracle.

## Euros (sEUR)

**Address:** [TK49vrCh6WqLAo9SpoT26y78jt1SNEJZ9V](https://tronscan.io/#/address/TK49vrCh6WqLAo9SpoT26y78jt1SNEJZ9V)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Euros (EUR) through price feeds supplied by an oracle.

## Inverted Bitcoin (iBTC)

**Address:** [TKc16iAQfuVXkufdtqySbqSvpfV21Nj92U](https://tronscan.io/#/address/TKc16iAQfuVXkufdtqySbqSvpfV21Nj92U)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sBTC](#bitcoin-sbtc)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $10,600 | $15,900 | $5,300|

>Inversely tracks the price of Bitcoin (BTC) through price feeds supplied by an oracle. The entry point is $10600 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $15900 (i.e. when Bitcoin's value reaches $5300) or its lower limit of $5300 (i.e. when Bitcoin’s value reaches $15900). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iBTC with different limits.

## Inverted Ether (iETH)

**Address:** [TQ2kAx8NknmDjxEWT5XVXdEdJb4PwgC97J](https://tronscan.io/#/address/TQ2kAx8NknmDjxEWT5XVXdEdJb4PwgC97J)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sETH](#ether-seth)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $220 | $330 | $110|

>Inversely tracks the price of Ether (ETH) through price feeds supplied by an oracle. The entry point is $220 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $330 (i.e. when Ether's value reaches $110) or its lower limit of $110 (i.e. when Ether’s value reaches $330). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iETH with different limits.

## Inverted Tron (iTRX)

**Address:** [TXr4bGihxMAEXh25DpDDHmWceMxC1NTbVa](https://tronscan.io/#/address/TXr4bGihxMAEXh25DpDDHmWceMxC1NTbVa)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

**Inverse of**: [sTRX](#tron-strx)

| Entry Point | Upper Limit | Lower Limit |
| - | - | - |
| $0.01500 | $0.02800 | $0.00500|

>Inversely tracks the price of Tron (TRX) through price feeds supplied by an oracle. The entry point is $0.015 (the approximate market price at time of creation). This Synth freezes when it reaches its upper limit of $0.028 (i.e. when Tron's value reaches $0.002) or its lower limit of $0.005 (i.e. when Tron’s value reaches $0.025). If it reaches either of its limits and gets frozen, it will no longer be able to be purchased on Oikos.Exchange, but can still be traded for other Synths at its frozen value. At some point after it has reached either of its limits, it will be substituted for another iTRX with different limits.

## Oikos (OKS)

**Address:** [TSCfE2WrmrpyuK4JLicbJCfXzZnJJ2kdJJ](https://tronscan.io/#/address/TSCfE2WrmrpyuK4JLicbJCfXzZnJJ2kdJJ)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>The Oikos Network Token (OKS) gets staked as collateral to back Synths and entitles stakers to receive fees generated by Synth trades on Oikos.Exchange.

## Pound Sterling (sGBP)

**Address:** [TVDe82RiXzPJNcdugAKdZ2QjRgF89h43VY](https://tronscan.io/#/address/TVDe82RiXzPJNcdugAKdZ2QjRgF89h43VY)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Pound Sterling (GBP) through price feeds supplied by an oracle.

## Swiss Franc (sCHF)

**Address:** [TK57xmmpQFUiPcggtG1EB2v7KBKeqr99dh](https://tronscan.io/#/address/TK57xmmpQFUiPcggtG1EB2v7KBKeqr99dh)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of Swiss Franc (CHF) through price feeds supplied by an oracle.

## TRON (sTRX)

**Address:** [TQcPMpkEp7Vq4RxEMhEtHWkE5wGhEtbNDz](https://tronscan.io/#/address/TQcPMpkEp7Vq4RxEMhEtHWkE5wGhEtbNDz)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of TRON (TRX) through price feeds supplied by an oracle.

## US Dollars (sUSD)

**Address:** [TVricqsN3bHXeyZybX7Agw6hn8Y2XdKrMH](https://tronscan.io/#/address/TVricqsN3bHXeyZybX7Agw6hn8Y2XdKrMH)

**Decimals:** 18

**Price Feed**: Oikos (centralized)

- Oracle: [TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa](https://tronscan.io/#/address/TRYTKaB8x1ru3YcZzyvyKLoK32DrgvnnGa)
- Contract: [ExchangeRates](https://contracts.oikos.cash/ExchangeRates)

>Tracks the price of a single US Dollar (USD). This Synth always remains constant at 1.}

