const ErrorMessage = Object.freeze({
  INVALID_PURCHASE_COST: '[ERROR] 구입 금액은 숫자여야 합니다.',
  INVALID_PURCAHSE_COST_RANGE: '[ERROR] 구입 금액은 0 이상의 숫자여야 합니다.',
  INVALID_PURCHASE_COST_UNIT: '[ERROR] 구입 금액은 1000원 단위여야 합니다.',
  INVALID_LOTTO_NUMBERS_RANGE:
    '[ERROR] 당첨 번호는 1 ~ 45 사이의 숫자여야 합니다.',
  INVALID_LOTTO_NUMBERS_LENGTH: '[ERROR] 당첨 번호는 총 6개의 숫자여야 합니다.',
  INVALID_LOTTO_NUMBERS_UNIQUENESS: '[ERROR] 로또 번호는 중복될 수 없습니다.',
});

export default ErrorMessage;