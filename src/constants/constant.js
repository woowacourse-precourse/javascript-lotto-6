const MAX_NUMBER = 45;
const MIN_NUMBER = 1;

const LOTTO_LENGTH = 6;

const MULTIPLE = 1000;

const ZERO = 0;

const MATCH_NUMBER = Object.freeze({
  three: 5000,
  four: 50000,
  five: 1500000,
  fiveAndBonus: 30000000,
  six: 2000000000,
});

const MATCH = { three: ZERO, four: ZERO, five: ZERO, fiveAndBonus: ZERO, six: ZERO };

export const CONSTANT = { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH, MULTIPLE, ZERO, MATCH_NUMBER, MATCH };
export { MAX_NUMBER, MIN_NUMBER, LOTTO_LENGTH, MULTIPLE, ZERO, MATCH_NUMBER, MATCH };
