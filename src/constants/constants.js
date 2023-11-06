const STATMESSAGE = Object.freeze({
  fifth: '3개 일치 (5,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  first: '6개 일치 (2,000,000,000원) - ',
});

const VIEWMESSAGE = Object.freeze({
  purchseInput: '구입 금액을 입력해주세요.\n',
  lottoInput: '당첨 번호를 입력해주세요.\n',
  bonusInput: '보너스 번호를 입력해주세요.\n',
});

const STATISTICS = Object.freeze([
  { rank: 'fifth', winnings: 5000, count: 0 },
  { rank: 'fourth', winnings: 50000, count: 0 },
  { rank: 'third', winnings: 1500000, count: 0 },
  { rank: 'second', winnings: 30000000, count: 0 },
  { rank: 'first', winnings: 2000000000, count: 0 },
]);

const CHARACTER = Object.freeze({
  returnPreffix: '총 수익률은 ',
  returnSuffix: '%입니다.',
  purchaseSuffix: '개를 구매했습니다.',
  countSuffix: '개',
});

const NUMBER = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  lottoprice: 1000,
});

export { STATMESSAGE, STATISTICS, CHARACTER, NUMBER, VIEWMESSAGE };
