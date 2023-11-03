const ERROR_CODE = {
  purchaseAmount: '[ERROR] 입력을 받는 중에 예상치 못한 에러가 발생 했습니다.',
  createPurchaseData: '[ERROR] 로또를 구매하는 도웆에 예상치 못한 에러가 발생 했습니다.',
  isDuplicated: '[ERROR] 로또 번호에 중복된 숫자가 존재합니다',
  hasRemainder: '[ERROR] 구입 금액이 1000으로 나누어 떨어지지 않습니다.',
  valueIsNaN: '[ERROR] 입력값이 유효하지 않습니다.',
  valueIsEmpty: '[ERROR] 입력값에 빈값이 존재합니다.',
  valueIsTooSmall: '[ERROR] 로또를 구매할 수 없습니다.',
};

export default ERROR_CODE;
