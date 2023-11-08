export const GAME_NUMBER = Object.freeze({
  prizeNumber: [5000, 50000, 1500000, 30000000, 2000000000],
  numberMin: 1,
  numberMax: 45,
  numberLength: 6,
  purchaseUnit: 1000,
});

export const GAME_MESSAGE = Object.freeze({
  purchaseAmount: '구입금액을 입력해 주세요.\n',
  printPurchase: '개를 구매했습니다.',
  inputNumber: '\n당첨 번호를 입력해 주세요.\n',
  inputBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  resultLotto: '\n당첨 통계\n---',
});

export const ERROR_MESSAGE = Object.freeze({
  commaError: '\n[ERROR] 쉼표로 구분해야 합니다.',
  spaceError: '\n[ERROR] 공백이 포함되어 있습니다.',
  typeError: '\n[ERROR] 숫자로 입력해야 합니다.',
  lottoLengthError: '\n[ERROR] 로또 번호는 6개여야 합니다.',
  duplicationError: '\n[ERROR] 중복된 숫자가 없어야 합니다.',

  minCostError: '\n[ERROR] 1,000원 이상으로 입력해야 합니다.\n',
  divisionError: '\n[ERROR] 1,000원 단위로 입력해야 합니다.\n',

  rangeError: '\n[ERROR] 1부터 45 사이의 값을 입력해야 합니다.',
  uniqueError: '\n[ERROR] 당첨 번호와 다른 값을 입력해야 합니다.',
});
