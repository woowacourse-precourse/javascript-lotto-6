export const MESSAGE = Object.freeze({
  enterPurchaseAmount: '구입금액을 입력해 주세요.\n',
  bought: '개를 구매했습니다.',
  enterWinningNumber: '\n당첨 번호를 입력해 주세요.\n',
  enterBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

export const ERROR = Object.freeze({
  thousandWonUnit: '[ERROR] 1,000원 단위로 입력해주세요.',
  checkBelowThousand: '[ERROR] 1,000원 단위 숫자를 입력해주세요.',
  sameNumber: '[ERROR] 서로다른 값을 입력해주세요',
  bonusTypeNotNumber: '[ERROR] 보너스 번호는 정수여야 합니다.',
  rangeOfBonusNumber: '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  rangeOfLottoNumber: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  checkInteger: '[ERROR] 로또 번호는 정수여야 합니다.',
  differentNumber: '[ERROR] 로또 번호는 서로다른 숫자여야 합니다.',
});

export const WINNING_AMOUNT = Object.freeze({
  firstPlace: 200000000,
  secondPlace: 30000000,
  thirdPlace: 1500000,
  fourthPlace: 50000,
  fifthPlace: 5000,
});
