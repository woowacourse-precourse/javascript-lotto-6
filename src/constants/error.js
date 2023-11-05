const errorCase = {
  EMPTY_STRING: '',
};
const errorMessage = {
  EMPTY_STRING: '빈 값은 허용되지 않습니다.',
  INVALID_DIVISION: '구매 금액은 1000원으로 나누어 떨어져야 합니다.',
  INVALID_MIN_PRICE: '구매 금액은 최소 1000원 이상이여야 합니다.',
  INVALID_STRING_PRICE: '구매 금액은 숫자여야 합니다.',
  INVALID_STRING_WINNING_NUMBER: '당첨번호는 숫자로 이루어져야 합니다.',
  INVALID_IN_RANGE_WINNING_NUMBER: '당첨번호는 1에서 45 사이여야 합니다.',
  INVALID_UNIQUE_WINNING_NUMBER: '당첨번호는 중복되어서는 안됩니다.',
  INVALID_LENGTH_WINNING_NUMBER: '당첨번호는 6자리여야 합니다.',
  INVALID_STRING_BONUS_NUMBER: '보너스 번호는 숫자여야 합니다.',
  WINNING_NUMBER_IN_BONUS_NUMBER: '보너스 번호는 당첨번호와 중복될 수 없습니다.',
};
const ERROR = {
  errorCase,
  errorMessage,
};

export default ERROR;
