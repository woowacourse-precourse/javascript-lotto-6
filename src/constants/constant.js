export const PRIZE = Object.freeze({
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  BONUS_FIVE: 30000000,
  SIX: 2000000000,
});

export const ERROR_MESSAGE = Object.freeze({
  FROM_ONE_TO_FORTYFIVE_ONLY: '[ERROR] 1~45 사이의 정수만 입력 가능합니다.',
  SIX_DIGITS_ONLY: '[ERROR] 로또 번호는 6개여야 합니다.',
  DIFFERENT_DIGITS: '[ERROR] 각 로또 번호는 중복이 불가합니다.',
  DIFFERENT_BONUS: '[ERROR] 보너스 번호는 로또 번호와 중복이 불가합니다.',
  NUMBERS_ONLY: '[ERROR] 금액은 숫자만 입력가능합니다.',
  THOUSANDS_ONLY: '[ERROR] 로또는 1000원 단위로 구매 가능합니다.',
});

export const CONSOLE_MASSAGE = Object.freeze({
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
  MONEY_TO_PAY: '구입금액을 입력해 주세요.\n',
});
