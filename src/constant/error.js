const NUMBER = '[ERROR] 숫자를 입력하세요.';

const BONUS_NUMBER = Object.freeze({
  UNIQUE: '[ERROR] 당첨 번호에 있는 숫자는 보너스 번호가 될 수 없습니다.',
});

const BUYING_PRICE = Object.freeze({
  POSITIVE_INTEGER: '[ERROR] 구입 금액은 0보다 큰 숫자여야 합니다.',
  UNIT: '[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.',
});

const LOTTO_NUMBER_RANGE =
  '[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.';

const LOTTO_NUMBERS = Object.freeze({
  LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  UNIQE: '[ERROR] 로또 번호는 중복이 없어야 합니다.',
});

export {
  NUMBER,
  BONUS_NUMBER,
  BUYING_PRICE,
  LOTTO_NUMBER_RANGE,
  LOTTO_NUMBERS,
};
