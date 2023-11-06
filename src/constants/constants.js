const MESSAGE = Object.freeze({
  fifth: '3개 일치 (5,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  first: '6개 일치 (2,000,000,000원) - ',
});

const STATISTICS = Object.freeze([
  { rank: 'fifth', winnings: 5000, count: 0 },
  { rank: 'fourth', winnings: 50000, count: 0 },
  { rank: 'third', winnings: 1500000, count: 0 },
  { rank: 'second', winnings: 30000000, count: 0 },
  { rank: 'first', winnings: 2000000000, count: 0 },
]);

const CHARACTER = Object.freeze({
  returnpreffix: '총 수익률은 ',
  returnsuffix: '% 입니다.',
  purchasesuffix: '개를 구매했습니다.',
  countsuffix: '개',
});

const NUMBER = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  lottoprice: 1000,
});

export { MESSAGE, STATISTICS, CHARACTER, NUMBER };
