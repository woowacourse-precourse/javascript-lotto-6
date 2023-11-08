const purchaseAmount = Object.freeze({
  amountDivisor: 1000,
});

const number = Object.freeze({
  zero: 0,
  count: 6,
  min: 1,
  max: 45,
  percentage: 100,
});

const match = Object.freeze({
  threeMatch: 3,
  fourMatch: 4,
  fiveMatch: 5,
  fiveMatchWithBonus: 7,
  sixMatch: 6,
});

const prize = Object.freeze({
  [match.threeMatch]: 5000,
  [match.fourMatch]: 50000,
  [match.fiveMatch]: 1500000,
  [match.fiveMatchWithBonus]: 30000000,
  [match.sixMatch]: 2000000000,
});

const CONSTANTS = Object.freeze({
  purchaseAmount,
  number,
  match,
  prize,
});

export default CONSTANTS;
