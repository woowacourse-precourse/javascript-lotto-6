const LOTTO = {
  count: 6,
  price: 1000,
};
Object.freeze(LOTTO);

const LOTTO_NUMBER = {
  min: 1,
  max: 45,
};
Object.freeze(LOTTO_NUMBER);

const RANKING_BY = {
  6: 1,
  51: 2,
  5: 3,
  4: 4,
  3: 5,
};
Object.freeze(RANKING_BY);

const PRIZE_MONEY_BY = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
};
Object.freeze(PRIZE_MONEY_BY);

export { LOTTO, LOTTO_NUMBER, RANKING_BY, PRIZE_MONEY_BY };
