# Presale

The presale contract accepts deposits in the reserve asset (e.g. WBNB) and mints a corresponding amount of presale tokens (p-asset) to depositors. 
The p-asset can be redeemed 1:1 for the corresponding oToken, once the presale is finalized. The contract enforces the following rules:

- Presale price is calculated based on a fixed markup (<b>25%</b>) over the floor price (See the appendix).
- Minimun soft cap is between <b>20%</b> and <b>60%</b> of the hard cap.
- Presale duration is between <b>30</b> and <b>90</b> days.
- If the presale  in unsuccessful (does not reach the soft cap), the funds can be returned to depositors after <b>30</b> days from the end of the presale.

A presale can be finalized at any time before the end of its duration, as long as the soft cap is reached. 

*The fixed markup value can be changed on a per-project basis. Please get in touch with the team on Discord in order to discuss the needs of your project.*

## Appendix
Formula for computing the presale price:
```
presale markup = 0.25
presale price = floor price * (1 + presale markup)

```
