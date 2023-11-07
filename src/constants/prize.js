const PRIZE_OUT = Object.freeze({
  status: 'out',
  prizeMoney: 0,
});

const PRIZE_FIRST = Object.freeze({
  status: 'first',
  prizeMoney: 2_000_000_000,
});

const PRIZE_SECOND = Object.freeze({
  status: 'second',
  prizeMoney: 30_000_000,
});

const PRIZE_THIRD = Object.freeze({
  status: 'third',
  prizeMoney: 1_500_000,
});

const PRIZE_FOURTH = Object.freeze({
  status: 'fourth',
  prizeMoney: 50_000,
});

const PRIZE_FIFTH = Object.freeze({
  status: 'fifth',
  prizeMoney: 5_000,
});

const PRIZE_STATUS = Object.freeze({
  out: 'out',
  first: 'first',
  second: 'second',
  third: 'third',
  fourth: 'fourth',
  fifth: 'fifth',
});

const PRIZE = Object.freeze({
  out: PRIZE_OUT,
  first: PRIZE_FIRST,
  second: PRIZE_SECOND,
  third: PRIZE_THIRD,
  fourth: PRIZE_FOURTH,
  fifth: PRIZE_FIFTH,
});

export { PRIZE_STATUS, PRIZE };
