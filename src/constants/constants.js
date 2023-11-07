const LOTTO_CONDITION = Object.freeze({
  startRange: 1,
  endRange: 45,
  length: 6,
});

const PRICE_PER_TICKET = Object.freeze(1000);

const RANK = Object.freeze({
  first: 6,
  second: 5,
  third: 5,
  fourth: 4,
  fifth: 3,
});

const PRIZE_KEY = Object.freeze({
  firstPrize: 'firstPrize',
  secondPrize: 'secondPrize',
  thirdPrize: 'thirdPrize',
  fourthPrize: 'fourthPrize',
  fifthPrize: 'fifthPrize',
});

const PRIZE_AMOUNT = Object.freeze({
  [PRIZE_KEY.firstPrize]: 2_000_000_000,
  [PRIZE_KEY.secondPrize]: 30_000_000,
  [PRIZE_KEY.thirdPrize]: 1_500_000,
  [PRIZE_KEY.fourthPrize]: 50_000,
  [PRIZE_KEY.fifthPrize]: 5_000,
});

const INITIAL_STATISTICS = Object.freeze({
  [PRIZE_KEY.firstPrize]: 0,
  [PRIZE_KEY.secondPrize]: 0,
  [PRIZE_KEY.thirdPrize]: 0,
  [PRIZE_KEY.fourthPrize]: 0,
  [PRIZE_KEY.fifthPrize]: 0,
});

export { LOTTO_CONDITION, PRIZE_AMOUNT, PRICE_PER_TICKET, INITIAL_STATISTICS, PRIZE_KEY, RANK };
