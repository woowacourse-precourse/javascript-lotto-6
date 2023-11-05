const LOTTO_CONDITION = Object.freeze({
  startRange: 1,
  endRange: 45,
  length: 6,
});

const PRIZE_AMOUNT = Object.freeze({
  firstPrize: 2_000_000_000,
  secondPrize: 30_000_000,
  thirdPrize: 1_500_000,
  fourthPrize: 50_000,
  fifthPrize: 5_000,
});

const PRICE_PER_TICKET = Object.freeze(1000);

export { LOTTO_CONDITION, PRIZE_AMOUNT, PRICE_PER_TICKET };
