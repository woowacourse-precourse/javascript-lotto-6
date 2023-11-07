const WINNING_INFO = Object.freeze({
  first: Object.freeze({
    rank: 1,
    criteria: '6개 번호 일치',
    prizeMoney: 2000000000,
  }),
  second: Object.freeze({
    rank: 2,
    criteria: '5개 번호 + 보너스 번호 일치',
    prizeMoney: 30000000,
  }),
  third: Object.freeze({
    rank: 3,
    criteria: '5개 번호 일치',
    prizeMoney: 1500000,
  }),
  fourth: Object.freeze({
    rank: 4,
    criteria: '4개 번호 일치',
    prizeMoney: 50000,
  }),
  fifth: Object.freeze({
    rank: 5,
    criteria: '3개 번호 일치',
    prizeMoney: 5000,
  }),
});

export default WINNING_INFO;
