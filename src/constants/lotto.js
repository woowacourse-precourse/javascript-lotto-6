const LOTTO = Object.freeze({
  NUMBER_COUNT: 6,
  BONUS_NUMBER_COUNT: 1,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PRICE: 1000,
});

const REWARD = Object.freeze([
  Object.freeze({ match: LOTTO.NUMBER_COUNT, bonus: 0, reward: 2_000_000_000 }),
  Object.freeze({ match: LOTTO.NUMBER_COUNT - 1, bonus: 1, reward: 30_000_000 }),
  Object.freeze({ match: LOTTO.NUMBER_COUNT - 1, bonus: 0, reward: 1_500_000 }),
  Object.freeze({ match: LOTTO.NUMBER_COUNT - 2, bonus: 0, reward: 50_000 }),
  Object.freeze({ match: LOTTO.NUMBER_COUNT - 3, bonus: 0, reward: 5_000 }),
]);

export { LOTTO, REWARD };
