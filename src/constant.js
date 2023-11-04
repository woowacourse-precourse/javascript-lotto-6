const LOTTO_MESSAGE = {
  MONEY_INPUT: '구입금액을 입력해 주세요\n',
  WINNING_INPUT: '\n당첨 번호를 입력해 주세요\n',
  BONUS_INPUT: '\n보너스 번호를 입력해주세요\n',
  WINNING_STATISTICS: '\n당첨 통계\n---',
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  NUMBER: `${ERROR_PREFIX} 로또 번호의 개수는 6개 입니다`,
  RANGE: `${ERROR_PREFIX} 로또 번호는 1에서 45 사이의 숫자여야 합니다`,
  NOT_INTEGER: `${ERROR_PREFIX} 로또 번호는 정수여야 합니다`,
  MONEY: `${ERROR_PREFIX} 구입 금액은 1000원 단위로 입력해주세요`,
};

export { LOTTO_MESSAGE, ERROR_MESSAGE };
