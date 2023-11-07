const RANK = Object.freeze({
  first: 6,
  second: 5.5, // 5개 일치 + 보너스 번호 일치
  third: 5, // 5개 일치
  fourth: 4,
  fifth: 3,
});

const WINNING_INFO = Object.freeze({
  [RANK.first]: Object.freeze({
    rank: 1,
    matchingNumber: 6,
    criteria: '6개 일치',
    prizeMoney: 2_000_000_000,
  }),
  [RANK.second]: Object.freeze({
    rank: 2,
    matchingNumber: 5,
    criteria: '5개 일치, 보너스 볼 일치',
    prizeMoney: 30_000_000,
  }),
  [RANK.third]: Object.freeze({
    rank: 3,
    matchingNumber: 5,
    criteria: '5개 일치',
    prizeMoney: 1_500_000,
  }),
  [RANK.fourth]: Object.freeze({
    rank: 4,
    matchingNumber: 4,
    criteria: '4개 일치',
    prizeMoney: 50_000,
  }),
  [RANK.fifth]: Object.freeze({
    rank: 5,
    matchingNumber: 3,
    criteria: '3개 일치',
    prizeMoney: 5_000,
  }),
});

export { RANK, WINNING_INFO };
