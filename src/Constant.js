export const ERROR = {
  MONEY_IS_NAN: '[ERROR] 구입금액을 숫자로 입력해주세요.',
  MONEY_HAS_REMAINDER: '[ERROR] 구입금액을 1000원 단위로 입력해주세요',

  LOTTO_NUMBER_NOT_SIX: '[ERROR] 로또 번호는 6개여야 합니다.',
  LOTTO_NUMBER_NOT_IN_VALID_RANGE: '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.',
  LOTTO_NUMBER_IS_REDUNDANT: '[ERROR] 로또 번호가 중복됩니다.',

  WINNING_NUMBER_IS_NAN: '[ERROR] 당첨 번호를 숫자로 입력해주세요.',
  WINNING_NUMBER_NOT_SIX: '[ERROR] 당첨 번호는 6개여야 합니다.',
  WINNING_NUMBER_NOT_IN_VALID_RANGE: '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.',
  WINNING_NUMBER_IS_REDUNDANT: '[ERROR] 당첨 번호가 중복됩니다.',

  BONUS_NUMBER_IS_NAN: '[ERROR] 보너스 번호를 숫자로 입력해주세요.',
  BONUS_NUMBER_NOT_IN_VALID_RANGE: '[ERROR] 당첨 번호는 1~45 사이의 숫자여야 합니다.',
};

export const PRIZE = {
  FOURTH: 5000,
  THIRD: 50000,
  SECOND: 1500000,
  BONUS: 30000000,
  FIRST: 2000000000,
}

export const PRIZE_STRING = {
  FOURTH: '5,000원',
  THIRD: '50,000원',
  SECOND: '1,500,000원',
  BONUS: '30,000,000원',
  FIRST: '2,000,000,000원',
}

export const TICKET_PRICE = 1000;