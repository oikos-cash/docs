# Solvency Invariant

From the perspective of the protocol, all backed tokens outside its control are considered "circulating supply", while "capacity" refers to how many tokens a position can absorb before exhaustion of the reserve assets contained in it. In order to guarantee it can always buy back the whole circulating supply, the protocol enforces the following solvency invariant:

```
  floor capacity + anchor capacity > circulating supply

```