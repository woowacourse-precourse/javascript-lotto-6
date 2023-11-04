const ERROR = Object.freeze({
  NUMBERS_GREATER_THAN_ZERO: '[ERROR] 구입 금액은 0보다 큰 숫자여야 합니다.',
  BUYING_PRICE_UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
  LOTTO_NUMBERS_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBERS_RANGE: '[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.',
  LOTTO_NUMBERS_UNIQE: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
  WINNING_NUMBERS_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
  WINNING_NUMBERS_RANGE: '[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.',
  WINNING_NUMBERS_UNIQE: '[ERROR] 당첨 번호는 중복이 없어야 합니다.',
  BONUS_NUMBER_INTEGER: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  BONUS_NUMBER_RANGE: '[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.',
  BONUS_NUMBER_UNIQUE:
    '[ERROR] 보너스 번호는 당첨 번호에 없는 숫자여야 합니다.',
});

export default ERROR;
