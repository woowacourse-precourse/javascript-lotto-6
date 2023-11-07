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

const IGNORE_COUNT = [0, 1, 2];
Object.freeze(IGNORE_COUNT);

const RANKING = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
};
Object.freeze(RANKING);

const RANKING_BY = {
  6: RANKING.first,
  51: RANKING.second,
  5: RANKING.third,
  4: RANKING.fourth,
  3: RANKING.fifth,
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

export { LOTTO, IGNORE_COUNT, RANKING, RANKING_BY, PRIZE_MONEY_BY };
