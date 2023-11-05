const BONUS_NUMBER = Object.freeze({
  NUMBER: '[ERROR] 보너스 번호는 숫자여야 합니다.',
  RANGE: '[ERROR] 보너스 번호는 1에서 45 사이의 숫자여야 합니다.',
  UNIQUE: '[ERROR] 보너스 번호는 당첨 번호에 없는 숫자여야 합니다.',
});

const BUYING_PRICE = Object.freeze({
  POSITIVE_INTEGER: '[ERROR] 구입 금액은 0보다 큰 숫자여야 합니다.',
  UNIT: '[ERROR] 구입 금액은 1,000원 단위여야 합니다.',
});

const LOTTO_NUMBERS = Object.freeze({
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  RANGE: '[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.',
  UNIQE: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
});

const WINNING_NUMBERS = Object.freeze({
  LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다.',
  RANGE: '[ERROR] 당첨 번호는 1에서 45 사이의 숫자여야 합니다.',
  UNIQE: '[ERROR] 당첨 번호는 중복이 없어야 합니다.',
});

export { BONUS_NUMBER, BUYING_PRICE, LOTTO_NUMBERS, WINNING_NUMBERS };
