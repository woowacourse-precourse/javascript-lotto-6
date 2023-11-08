const ERROR = Object.freeze({
  EMPTY_INPUT: '입력 값이 없습니다. 값을 입력해주세요',

  INPUT_PURCHASE_AMOUNT: {
    INVALID_FORMAT: '로또 구매 금액에는 숫자만 입력할 수 있습니다.',
    INVALID_PRICE_RANGE:
      '로또는 최소 1,000원부터 최대 100,000원까지 구매할 수 있습니다.',
    INVALID_PRICE_UNIT: '로또 구입 금액은 1,000원 단위여야 합니다.',
  },

  INPUT_NUMBERS: {
    INVALID_CHARACTER:
      '당첨 번호에는 공백 없이 1부터 45 사이의 숫자와 쉼표만 입력할 수 있습니다.',
    INVALID_FORMAT:
      '번호 사이에 쉼표를 한 개만 입력할 수 있습니다.\n(입력 값은 숫자로 끝나야 합니다.)',
    INVALID_LENGTH: '당첨 번호는 총 6개를 입력해야 합니다.',
    INVALID_NUMBER_RANGE: '각 번호는 1부터 45 사이의 숫자여야 합니다.',
    DUPLICATE_VALUE: '각 번호는 중복되지 않아야 합니다.',
  },

  INPUT_BONUS_NUMBER: {
    INVALID_FORMAT:
      '보너스 번호에는 1부터 45 사이의 숫자만 입력할 수 있습니다.',
    INCLUDE_WINNING_NUMBERS:
      '보너스 번호는 당첨 번호에 포함되어 있지 않아야 합니다.',
  },
});

export default ERROR;
