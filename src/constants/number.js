const MAGIC_NUMBER = Object.freeze({
  lottoStart: 1,
  lottoEnd: 45,
  lottoCount: 6,
  oneThousand: 1000,
  hundred: 100,
  zero: 0,
  failure: -1,
  rank: 5,
});

const MATCH_NUMBER = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  six: 6,
});

const WINNING_INDEX = Object.freeze({
  zero: 0,
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
});

export { MAGIC_NUMBER, MATCH_NUMBER, WINNING_INDEX };
