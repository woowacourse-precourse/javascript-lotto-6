const errorCase = {
  EMPTY_STRING: '',
};
const errorMessage = {
  EMPTY_STRING: '빈 값은 허용되지 않습니다.',
  INVALID_DIVISION: '구매 금액은 1000원으로 나누어 떨어져야 합니다.',
  INVALID_MIN_PRICE: '구매 금액은 최소 1000원 이상이여야 합니다.',
  INVALID_STRING_PRICE: '구매 금액은 숫자여야 합니다.',
};
const ERROR = {
  errorCase,
  errorMessage,
};

export default ERROR;
