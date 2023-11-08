const SETTING = {
  LOTTO_PRICE: 1000,
  LOTTO_NUMBER_COUNT: 6,
  SEPARATOR: ",",
  LOTTO_NUMBER_RANGE: Object.freeze({ MIN: 1, MAX: 45 }),
  PRIZE_BY_MATCH_COUNT: Object.freeze([
    {
      MATCH_NUMBER: 3,
      MATCH_BONUS: 0,
      PRIZE: 5000,
    },
    {
      MATCH_NUMBER: 4,
      MATCH_BONUS: 0,
      PRIZE: 50000,
    },
    {
      MATCH_NUMBER: 5,
      MATCH_BONUS: 0,
      PRIZE: 1500000,
    },
    {
      MATCH_NUMBER: 5,
      MATCH_BONUS: 1,
      PRIZE: 30000000,
    },
    {
      MATCH_NUMBER: 6,
      MATCH_BONUS: 0,
      PRIZE: 2000000000,
    },
  ]).map(Object.freeze),
};

export default SETTING;
