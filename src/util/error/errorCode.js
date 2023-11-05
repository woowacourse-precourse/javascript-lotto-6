export const PURCHASE_ERROR_CODE = {
  purchaseAmount: '[ERROR] 입력을 받는 중에 예상치 못한 에러가 발생 했습니다.',
  createPurchaseData: '[ERROR] 로또를 구매하는 도중에 예상치 못한 에러가 발생 했습니다.',
  isDuplicated: '[ERROR] 로또 번호에 중복된 숫자가 존재합니다',
  hasRemainder: '[ERROR] 구입 금액이 1000으로 나누어 떨어지지 않습니다.',
  valueIsNaN: '[ERROR] 입력값이 유효하지 않습니다.',
  valueIsEmpty: '[ERROR] 입력값에 빈값이 존재합니다.',
  valueIsTooSmall: '[ERROR] 로또를 구매할 수 없습니다.',
};

export const LOTTO_ERROR_CODE = {
  failToCreateLotto: '[ERROR] 로또 번호를 생상하는 도중에 예상치 못한 에러가 발생 했습니다.',
  valueIsEmptyOrZero: '[ERROR] 로또 번호에 빈값 또는 0이 존재 합니다.',
  valueIsOutOfRange: '[ERROR] 로또 번호는 1 ~ 45 까지의 숫자로 이루어져야 합니다.',
  valueIsNotInteger: '[ERROR] 로또 번호는 정수로만 이루어져야 합니다.',
};

export const BONUS_ERROR_CODE = {
  valueMatchesLotto: '[ERROR] 보너스 번호가 로또번호 중 하나 입니다.',
};
