export const MESSAGE = Object.freeze({
  moneyInput: `구입금액을 입력해 주세요.\n`,
  lottoAmount: amount => `\n${amount}개를 구매했습니다.`,
  lottoList: lotto => `[${lotto.join(', ')}]`,
});

export const ERROR = Object.freeze({
  notDivisibleMoney: `\n[ERROR] 1000단위의 금액을 입력해주세요.`,
  emptyValue: `\n[ERROR] 값을 입력해주세요.`,
  notNumberic: `\n[ERROR] 양의 정수값만 입력해주세요.`,
  // notInteger: `\n[ERROR] 정수형을 입력해주세요.`,
  underThousandMoney: `\n[ERROR] 1000원 이상을 입력해주세요.`,
});
