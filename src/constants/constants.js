const INPUT_MESSAGE = {
  PURCHASING_AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  PURCHASE_LOTTO: '개를 구매했습니다.',
  WINNING_MESSAGE: '당첨 통계',
};

const INPUT_ERROR_MESSAGE = {
  PURCHASE_AMOUNT_ERROR: '[ERROR] 입력한 구입 금액이 천 단위가 아닙니다.',
  WINNING_NUMBERS_ERROR: '[ERROR] 입력한 당첨 번호가 1 ~ 45의 숫자가 아닙니다.',
  MORE_WINNING_NUMBERS_ERROR:
    '[ERROR] 입력한 당첨 번호가 6개가 넘어서는 안됩니다.',
  BLANK_ERROR: '[ERROR] 입력한 값이 공백입니다.',
  NUMBER_ERROR: '[ERROR] 입력한 값이 숫자가 아닙니다.',
  DUPLICATE_WINNING_NUMBER:
    '[ERROR] 입력한 당첨 번호에 중복된 숫자가 존재합니다.',
  DUPLICATE_BONUS_NUMBER:
    '[ERROR] 입력한 보너스 번호가 당첨 번호에 존재합니다.',
};

const SYMBOL = {
  COMMA: ',',
  DIVIDER: '---',
};

const RANK_RESULT = {
  FIRST_RANK: 1,
  SECOND_RANK: 2,
  THIRD_RANK: 3,
  FOURTH_RANK: 4,
  FIFTH_RANK: 5,
};

const RESULT_MESSAGE = {
  WINNING_STATISTICS: '당첨 통계',
  FIRST_RESULT_MESSAGE: '6개 일치 (2,000,000,000원)',
  SECOND_RESULT_MESSAGE: '5개 일치, 보너스 볼 일치 (30,000,000원)',
  THIRD_RESULT_MESSAGE: '5개 일치 (1,500,000원)',
  FOURTH_RESULT_MESSAGE: '4개 일치 (50,000원)',
  FIFTH_RESULT_MESSAGE: '3개 일치 (5,000원)',
};

export {
  INPUT_MESSAGE,
  INPUT_ERROR_MESSAGE,
  SYMBOL,
  RANK_RESULT,
  RESULT_MESSAGE,
};
