const purchaseAmount = Object.freeze({
  amountDivisor: 1000,
});

const number = Object.freeze({
  count: 6,
  min: 1,
  max: 45,
});

const match = Object.freeze({
  threeMatch: 3,
  fourMatch: 4,
  fiveMatch: 5,
  fiveMatchWithBonus: 7,
  sixMatch: 6,
});

const CONSTANTS = Object.freeze({
  purchaseAmount,
  number,
  match,
});

export default CONSTANTS;
