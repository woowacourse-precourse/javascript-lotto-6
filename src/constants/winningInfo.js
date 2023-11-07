const WINNING_INFO = Object.freeze({
  first: Object.freeze({
    rank: 1,
    criteria: '6개 일치',
    prizeMoney: 2_000_000_000,
  }),
  second: Object.freeze({
    rank: 2,
    criteria: '5개 일치, 보너스 볼 일치',
    prizeMoney: 30_000_000,
  }),
  third: Object.freeze({
    rank: 3,
    criteria: '5개 일치',
    prizeMoney: 1_500_000,
  }),
  fourth: Object.freeze({
    rank: 4,
    criteria: '4개 일치',
    prizeMoney: 50_000,
  }),
  fifth: Object.freeze({
    rank: 5,
    criteria: '3개 일치',
    prizeMoney: 5_000,
  }),
});

export default WINNING_INFO;
