export const GAME_MESSAGES = {
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASE_RESULT: '개를 구매했습니다.\n',
  ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  WINNING_STATISTICS: '당첨 통계\n',
};

export const ERROR_MESSAGES = {
  EMPTY_INPUT: '[ERROR] 빈 값을 입력했습니다.',
  MONEY_NOT_NUMERIC: '[ERROR] 금액은 숫자로 입력해야 합니다.',
  AMOUNT_LESS_THAN_1000: '[ERROR] 1000원보다 작은 수는 입력할 수 없습니다.',
  NOT_IN_1000_UNIT: '[ERROR] 1000원 단위로 입력해주세요.',
  INVALID_LENGTH: '[ERROR] 정확히 6개의 숫자를 입력해주세요.',
  NON_NUMERIC: '[ERROR] 숫자가 아닌 값이 포함되어 있습니다.',
  OUT_OF_RANGE: '[ERROR] 1에서 45 사이의 숫자를 입력해주세요.',
  DUPLICATE: '[ERROR] 중복된 숫자가 있습니다.',
  DUPLICATE_BONUS: '[ERROR] 보너스 번호가 당첨 번호와 중복될 수 없습니다.',
};

export const MESSAGES = {
  PURCHASE_MESSAGE_TEMPLATE: '개를 구매했습니다.',
  RESULT_HEADER: '\n당첨 통계\n---',
};

export const LOTTO_PRICE = 1000;

export const NUMBER_RANGE = {
  MIN: 1,
  MAX: 45,
  COUNT: 6,
};
