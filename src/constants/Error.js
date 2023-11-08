const PURCHASE_AMOUNT = Object.freeze({
  notNumber: '[ERROR] 구매 금액은 숫자여야 합니다.',
  notMin: '[ERROR] 최소 구매 금액은 1000원입니다.',
  invalidUnit: '[ERROR] 구매 금액은 1000원 단위여야 합니다.',
});

const BONUS_NUMBER = Object.freeze({
  notNumber: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  invalidRange: '[ERROR] 보너스 번호는 1 이상 45 이하여야 합니다.',
  notWinningNumber: '[ERROR] 보너스 번호는 당첨 번호 외의 숫자여야 합니다.',
});

const WINNING_NUMBER = Object.freeze({
  withoutComma: '[ERROR] 로또 번호는 콤마로 구분하여 입력하여야 합니다.',
  notUnique: '[ERROR] 로또 번호는 중복되지 않은 6개여야 합니다.',
  invalidRange: '[ERROR] 로또 번호는 1 이상 45 이하여야 합니다.',
});

export { PURCHASE_AMOUNT, BONUS_NUMBER, WINNING_NUMBER };
