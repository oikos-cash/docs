# No-Liquidation Loans

The Oikos protocol allows oTokens holders to borrow from the liquidity using their assets as a collateral. Since the algorithmic structure of the liquidity allows the IMV to only increase over time, loans can exist without the risk of liquidation. When a loan is obtained, the protocol quotes the collateral value 1:1 with the IMV price in terms of reserve asset. If a loan expires without being repaid, the protocol just destroys the collateral, with a zero net effect on the protocol. Loans have a fixed interest rate of x% which is calculated pro-rata over the loan duration and paid upfront. Interest rate payments accrue directly to the liquidity, contributing to strengthen the IMV.  

## Rolling Loans
When the IMV price increase over the duration of a loan, the protocol allows the lender to increase the borrowed amount and extend the loan duration in change of an interest payment calculated over the new terms.

## Leverage
Holders can multiply their exposure to the token by borrowing from the liquidity and using the funds to buy more tokens. This is a powerful tool for holders who want to increase their exposure to the token without incurring in the risk of liquidation. 