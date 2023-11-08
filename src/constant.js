const LOTTO = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  THE_NUMBER: 6,
};

const LOTTO_MESSAGE = {
  MONEY_INPUT: '구입금액을 입력해 주세요.\n',
  WINNING_INPUT: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_INPUT: '\n보너스 번호를 입력해주세요.\n',
  WINNING_STATISTICS: '\n당첨 통계\n---',
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  THE_NUMBER: `${ERROR_PREFIX} 로또 번호의 개수는 6개 입니다`,
  OVERLAP: `${ERROR_PREFIX} 로또는 중복된 번호가 나올 수 없습니다.`,
  LOTTO_NUMBER_CONDITION: `${ERROR_PREFIX} 로또 번호는 1에서 45 사이의 정수여야 합니다`,
  MONEY_NOT_INTEGER: `${ERROR_PREFIX} 구입 금액은 정수를 입력해주세요.`,
  MONEY_THOUSANDS: `${ERROR_PREFIX} 구입 금액은 1000의 배수를 입력해주세요.`,
  MONEY_NOT_ENOUGH: `${ERROR_PREFIX} 구입 금액은 1000원 이상의 숫자를 입력해주세요.`,
};

const PRIZE_MONEY = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

export { LOTTO, LOTTO_MESSAGE, ERROR_MESSAGE, PRIZE_MONEY };
