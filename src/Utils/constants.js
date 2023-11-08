const LOTTO_INFO = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  PRICE: 1000,
  LENGTH: 6,
  MIN_LOTTO_MONEY: 1000,
  MAX_LOTTO_MONEY: Number.MAX_SAFE_INTEGER,
  PRIZE: {
    1: 2000000000,
    2: 30000000,
    3: 1500000,
    4: 50000,
    5: 5000,
    6: 0,
  },
  DECIMAL_POINT: 1,
});

const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  PURCHASE_SUFFIX: `개를 구매했습니다.`,
  RESULT_HEADER: `당첨 통계`,
  REUSLT_LINE: `-----------`,
  RESULT_CHECK: [
    `3개 일치 (5,000원)`,
    `4개 일치 (50,000원)`,
    `5개 일치 (1,500,000원)`,
    `5개 일치, 보너스 볼 일치 (30,000,000원)`,
    `6개 일치 (2,000,000,000원)`,
  ],
});

const ERROR_MESSAGE = Object.freeze({
  WINNING_NUMBERS_DUPLICATE: `[ERROR] 로또 번호와 보너스 번호는 중복이 없어야 합니다.`,
  TYPE_ERROR: `[ERROR] 정수가 아닙니다. 다시 입력해주세요.`,
  INVALID_PURCHASE_UNIT: `[ERROR] 금액은 ${LOTTO_INFO.PRICE} 단위로 입력해주세요.`,
  INVALID_PURCHASE_RANGE: `[ERROR] 금액은 ${LOTTO_INFO.MIN_MONEY}부터 ${LOTTO_INFO.MAX_LOTTO_MONEY}까지 입력 가능합니다.`,
  INVALID_WIN_NUMBER_SIZE: `[ERROR] 로또 번호는 ${LOTTO_INFO.LENGTH}개로 입력해주세요.`,
  INVALID_WIN_NUMBER_RANGE: `[ERROR]로또 번호는 ${LOTTO_INFO.MIN_NUMBER}부터 ${LOTTO_INFO.MAX_NUMBER}까지의 숫자여야 합니다.`,
  INVALID_INPUT_FORMAT: `[ERROR] 입력 형태가 맞지 않습니다. 게임을 종료합니다.`,
  UNKNOWN_ERROR: `[ERROR] 알 수 없는 에러가 발생했습니다.`,
});

const PRIZE_CHECK = Object.freeze({
  0: { false: 6, true: 6 },
  1: { false: 6, true: 6 },
  2: { false: 6, true: 6 },
  3: { false: 5, true: 5 },
  4: { false: 4, true: 4 },
  5: { false: 3, true: 2 },
  6: { false: 1, true: 1 },
});

export {
  LOTTO_INFO,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  PRIZE_CHECK,
};
