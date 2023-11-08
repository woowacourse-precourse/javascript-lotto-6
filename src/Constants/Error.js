export const PURCHASE_AMOUNT_ERROR_MESSAGE = {
  notNumber: '[ERROR] 구입금액은 숫자로 입력해야 합니다.',
  nonPositive: '[ERROR] 구입금액은 양수여야 합니다.',
  notDivisibleBy1000: '[ERROR] 구입금액은 1000원으로 나누어 떨어져야 합니다.'
};

export const WINNING_NUMBERS_ERROR_MESSAGE = {
  notNumber: '[ERROR] 당첨 번호는 숫자여야 합니다.',
  notInRange: '[ERROR] 당첨 번호는 1부터 45 범위 내이어야 합니다.',
  notSixNumbers: '[ERROR] 당첨 번호는 6개여야 합니다.',
  hasDuplicates: '[ERROR] 중복된 숫자를 입력하면 안됩니다.'
};

export const BONUS_NUMBER_ERROR_MESSAGE = {
  notInRange: '[ERROR] 보너스 번호는 1부터 45 범위 내이어야 합니다.',
  hasDuplicates: '[ERROR] 당첨 번호와 중복된 숫자를 입력하면 안됩니다.',
  notNumber: '[ERROR] 당첨 번호는 숫자여야 합니다.'
};

export const LOTTO_ERROR_MESSAGE = {
  notSixNumbers: '[ERROR] 로또 번호는 6개여야 합니다.',
  hasDuplicates: '[ERROR] 로또 번호는 중복되지 말아야 합니다.',
  notInRange: '[ERROR] 로또 번호의 범위는 1부터 45이어야 합니다.'
};
