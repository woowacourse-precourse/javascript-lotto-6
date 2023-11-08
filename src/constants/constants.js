const STATMESSAGE = Object.freeze({
  start: '당첨통계\n---',
  fifth: '3개 일치 (5,000원) - ',
  fourth: '4개 일치 (50,000원) - ',
  third: '5개 일치 (1,500,000원) - ',
  second: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  first: '6개 일치 (2,000,000,000원) - ',
});

const VIEWMESSAGE = Object.freeze({
  purchaseInput: '구입 금액을 입력해주세요.\n',
  lottoInput: '당첨 번호를 입력해주세요.\n',
  bonusInput: '보너스 번호를 입력해주세요.\n',
});

const ERRORMESSAGE = Object.freeze({
  purchaseInput: '[ERROR] 구입 금액은 숫자여야 합니다.',
  lottoInput: '[ERROR] 로또 번호는 1~45 사이여야 합니다.',
  bonusInput: '[ERROR] 보너스 번호는 1~45 사이여야 합니다.',
  bonusDuplicate: '[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.',
  lottoDuplicate: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  purchaseAmount: '[ERROR] 구입 금액은 1000원 단위여야 합니다.',
  lottoLength: '[ERROR] 로또 번호는 6개여야 합니다.',
  lottoType: '[ERROR] 로또 번호는 정수여야 합니다.',
  bonusType: '[ERROR] 보너스 번호는 정수여야 합니다.',
  purchaseRange1: '[ERROR] 구입 금액은 0보다 작을 수 없습니다.',
  purchaseRange2: '[ERROR] 구입 금액은 40억(당첨금액의 2배) 이하여야 합니다.',
  purchaseToBig: '[ERROR] 금액이 너무 큽니다.',
  purchaseToSmall: '[ERROR] 금액이 너무 작습니다.',
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
  newline: '\n',
});

const NUMBER = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  lottoPrice: 1000,
});

export {
  STATMESSAGE,
  STATISTICS,
  CHARACTER,
  NUMBER,
  VIEWMESSAGE,
  ERRORMESSAGE,
};
