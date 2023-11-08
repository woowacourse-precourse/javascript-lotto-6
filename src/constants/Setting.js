const INFO = Object.freeze({
  inputPurchaseAmount: '구입금액을 입력해 주세요.\n',
  inputWinningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const SYMBOL = Object.freeze({
  emptyString: '',
  dash: '-',
  newLine: '\n',
  separator: ',',
  colon: ':',
  space: ' ',
});

const GAME = Object.freeze({
  lottoNumber: 6,
  minNumber: 1,
  maxNumber: 45,
  removeSpaceRegex: /\s/g,
  unit: 1000,
  roundDigit: 10,
  percentage: 100,
});

const PRIZE = Object.freeze([
  [3, 5000],
  [4, 50000],
  [5, 1500000],
  ['5+bonus', 30000000],
  [6, 2000000000],
]);

export { INFO, SYMBOL, GAME, PRIZE };
