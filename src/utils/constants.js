const LOTTO_INFO = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PRICE: 1000,
  LENGTH: 6,
  MIN_LOTTO_MONEY: 1000,
  PRIZE: {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
    6: 0,
  },
});

const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  INVALID_INPUT_FORMAT: `[ERROR] 입력 형태가 맞지 않습니다. 게임을 종료합니다.`,
  TYPE_ERROR: `[ERROR] 정수가 아닙니다. 다시 입력해주세요.`,
});

export { LOTTO_INFO, INPUT_MESSAGE, ERROR_MESSAGE };
