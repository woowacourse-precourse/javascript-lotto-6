const profit = Object.freeze({
  default: 0,
  unit: 100,
});

const prize = Object.freeze({
  countUnit: 1,
  defaultCount: 0,
});

const PRIZE_SERVICE = Object.freeze({ profit, prize });

export default PRIZE_SERVICE;
