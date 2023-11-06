export const GAME_RULE = Object.freeze({
  // ticekt
  TICKET_PRICE: 1000,
  MIN_TICKET_MONEY_INCLUSIVE: 1000,
  MAX_TICKET_MONEY_INCLUSIVE: Number.MAX_SAFE_INTEGER,
  // win numbers, bonus number
  WIN_NUMBERS_SIZE: 6,
  MIN_WIN_NUMBER_INCLUSIVE: 1,
  MAX_WIN_NUMBER_INCLUSIVE: 45,
  // output view
  DECIMAL_POINT: 1,
});

export const PRIZE_TO_REWARD = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  6: 0,
});

export const MATCH_TO_PRIZE = Object.freeze({
  // 낙첨
  0: { false: 6, true: 6 },
  1: { false: 6, true: 6 },
  2: { false: 6, true: 6 },
  // 당첨
  3: { false: 5, true: 5 },
  4: { false: 4, true: 4 },
  5: { false: 3, true: 2 },
  6: { false: 1, true: 1 },
});

export const INPUT_MESSAGE = Object.freeze({
  TICKET_MONEY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
});

const ERROR_HEAD = "[ERROR]";
export const ERROR_MESSAGE = Object.freeze({
  // validation error
  UNIQUE_CONSTRAINT_VIOLATED: `${ERROR_HEAD} 로또 번호와 보너스 번호는 중복이 없어야 합니다.`,
  NOT_AN_INT: `${ERROR_HEAD} 정수가 아닙니다. 다시 입력해주세요.`,
  INVALID_TICKET_MOD: `${ERROR_HEAD} 금액은 ${GAME_RULE.TICKET_PRICE} 단위로 입력해주세요.`,
  INVALID_TICKET_RANGE: `${ERROR_HEAD} 금액은 ${GAME_RULE.MIN_TICKET_MONEY_INCLUSIVE}부터 ${GAME_RULE.MAX_TICKET_MONEY_INCLUSIVE}까지 입력 가능합니다.`,
  INVALID_WIN_NUMBER_SIZE: `${ERROR_HEAD} 로또 번호는 ${GAME_RULE.WIN_NUMBERS_SIZE}개로 입력해주세요.`,
  INVALID_WIN_NUMBER_RANGE: `${ERROR_HEAD} 로또 번호는 ${GAME_RULE.MIN_WIN_NUMBER_INCLUSIVE}부터 ${GAME_RULE.MAX_WIN_NUMBER_INCLUSIVE}까지의 숫자여야 합니다.`,
  // non-validation error
  INSTANCE_NOT_INITIALIZED: `${ERROR_HEAD} 게임을 실행하기 이전에 출력을 시도할 수 없어요.`,
  FIELD_ALREADY_INITIALIZED: `${ERROR_HEAD} 이미 추첨이 완료된 복권입니다.`,
  LOTTO_NOT_EXIST: `${ERROR_HEAD} 로또 번호를 설정한 뒤에 보너스 번호를 검증할 수 있어요.`,
  UNKNOWN_ERROR: `${ERROR_HEAD} 무언가 잘못되었나봐요. 다시 시도해주세요.`,
});
