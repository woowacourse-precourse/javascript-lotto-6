const PRIZE = Object.freeze({
  0: 'nothing',
  1: 'nothing',
  2: 'nothing',
  3: 'fifthPrize',
  4: 'fourthPrize',
  6: 'firstPrize',
  thirdPrize: 'thirdPrize',
  secondPrize: 'secondPrize',
});

const PRIZE_REWARD = Object.freeze({
  fifthPrize: 5_000,
  fourthPrize: 50_000,
  thirdPrize: 1_500_000,
  secondPrize: 30_000_000,
  firstPrize: 2_000_000_000,
});

export { PRIZE, PRIZE_REWARD };
