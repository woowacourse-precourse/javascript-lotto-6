export class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const ERROR_MESSAGES = Object.freeze({
  invalidLottoPurchaseAmount: '[ERROR] 로또 구입 금액은 1000원 단위입니다.',
  invalidLottoPurchaseAmountZero:
    '[ERROR] 로또 구입 금액은 최소 1000원 부터입니다.',
  invalidLottoPurchaseAmountType:
    '[ERROR] 로또 구입 금액에 숫자가 아닌 다른 문자가 입력될 수 없습니다.',
  invalidLottoNumberRange:
    '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidLottoNumberType:
    '[ERROR] 로또 번호에 숫자가 아닌 다른 문자가 입력될 수 없습니다.',
  invalidLottoNumberDuplicate: '[ERROR] 로또 번호는 중복될 수 없습니다.',
  invalidLottoNumberLength: '[ERROR] 로또 번호의 개수는 6개입니다.',
  invalidBonusNumberType:
    '[ERROR] 보너스 번호에 숫자가 아닌 다른 문자가 입력될 수 없습니다.',
  invalidBonusNumberRange:
    '[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.',
  invalidBonusNumberDuplicate:
    '[ERROR] 보너스 번호는 로또 당첨 번호와 중복될 수 없습니다.',
});
