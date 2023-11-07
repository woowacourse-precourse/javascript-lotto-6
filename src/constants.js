const LOTTO_NUMBERS = {
  MIN_RANGE: 1,
  MAX_RANGE: 45,
  NUMBER_SIZE: 6,
  PAY_LOTTO_MONEY: 1000,
};

const GRADING_COUNT = {
  FIFTH_PRIZE: 3,
  FOURTH_PRIZE: 4,
  THIRD_PRIZE: 5,
  SECOND_PRIZE: 5,
  FIRST_PRIZE: 6,
};

const LOTTO_PRIZE_MONEY = {
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
};

const INPUT_MESSAGE = {
  PURCHASE_MESSAGE: '구입금액을 입력해 주세요.\n',
  PURCHASED_MESSAGE: (n) => `\n${n}개를 구매했습니다.`,
  LOTTO_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const ERROR_MESSAGE = {
  ISNAN: `\n[ERROR] 숫자만 입력해 주세요`,
  RANGE: `\n[ERROR] ${LOTTO_NUMBERS.MIN_RANGE}~${LOTTO_NUMBERS.MAX_RANGE}의 범위로 입력해 주세요.`,
  COUNT: `\n[ERROR] (,)를 포함한 ${LOTTO_NUMBERS.NUMBER_SIZE}개의 숫자를 입력해 주세요.`,
  DUPLICATED: `\n[ERROR] 중복된 숫자는 입력할 수 없습니다.`,
  UNIT: `\n[ERROR] ${LOTTO_NUMBERS.PAY_LOTTO_MONEY}원 단위로 입력해 주세요.`,
  GAME: `\n[ERROR] 게임을 이용하는데 오류가 생겼습니다..`,
};

const WINNER_MESSAGE = {
  WINLOG: '\n당첨 통계 \n---',
  PROFIT: (number) => `총 수익률은 ${number}%입니다.`,
};

export {
  LOTTO_NUMBERS,
  GRADING_COUNT,
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  WINNER_MESSAGE,
  LOTTO_PRIZE_MONEY,
};
