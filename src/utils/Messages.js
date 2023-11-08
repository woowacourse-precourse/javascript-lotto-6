const ERROR_MESSAGES = Object.freeze({
  INVALID_LOTTO_PRICE:'[ERROR] 로또 구입 금액은 1,000원 단위로 입력되어야 합니다.',
  INVALID_LOTTO_NUMBER: '[ERROR] 로또 번호는 6개여야 합니다.',
  INVALID_NUMBER: '[ERROR] 숫자가 아닌 값이 입력되었습니다.',
  INVALID_RANGE: '[ERROR] 1 ~ 45 사이의 값을 입력해주세요.',
  BONUS_NUMBER_INCLUDED: '[ERROR] 보너스 번호는 로또 번호에 포함될 수 없습니다.',
  DEFAULT_ERROR: '[ERROR] 유효한 값이 아닙니다.',
});

const GAME_MESSAGES = Object.freeze({
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  ENTER_WINNING_NUMBERS: '당첨 번호를 입력해 주세요.',
  ENTER_BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
  RESULT_TITLE: '당첨 통계',
  SEPARATOR: '---',
});

export { ERROR_MESSAGES, GAME_MESSAGES };
