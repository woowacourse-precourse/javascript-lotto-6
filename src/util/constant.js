export const MESSAGE = Object.freeze({
  moneyInput: `구입금액을 입력해 주세요.\n`,
  lottoAmount: amount => `\n${amount}개를 구매했습니다.`,
  lottoList: lotto => `[${lotto.join(', ')}]`,
  lottoNumberInput: `당첨 번호를 입력해 주세요.\n`,
  bonusNumberInput: `보너스 번호를 입력해 주세요.\n`,
});

export const ERROR = Object.freeze({
  notDivisibleMoney: `[ERROR] 1000단위의 금액을 입력해주세요.\n`,
  emptyValue: `[ERROR] 값을 입력해주세요.\n`,
  notNumberic: `[ERROR] 양의 정수값만 입력해주세요.\n`,
  underThousandMoney: `[ERROR] 1000원 이상을 입력해주세요.\n`,
  notSixNumber: `[ERROR] 6개의 숫자를 쉼표를 통해 구분해 입력해 주세요.\n`,
  rangeOverInput: `[ERROR] 1~45 사이의 수만 입력해주세요.\n`,
  sameNumber: `[ERROR] 중복하지 않는 수를 입력해주세요.\n`,
});
