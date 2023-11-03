const LOTTO_MESSAGE = {
  MONEY_INPUT: '구입금액을 입력해 주세요\n',
  WINNING_INPUT: '당첨 번호를 입력해 주세요\n',
  BONUS_INPUT: '보너스 번호를 입력해주세요\n',
  WINNING_STATISTICS: '당첨 통계\n---\n',
};

const ERROR_PREFIX = '[ERROR]';
const ERROR_MESSAGE = {
  NUMBER: `${ERROR_PREFIX} 로또 번호의 개수는 6개 입니다`,
  RANGE: `${ERROR_PREFIX} 로또 번호는 1에서 45 사이의 숫자여야 합니다`,
  NOT_INTEGER: `${ERROR_PREFIX} 로또 번호는 정수여야 합니다`,
  MONEY: `${ERROR_PREFIX} 로또 번호는 정수여야 합니다`,
};

export { LOTTO_MESSAGE, ERROR_MESSAGE };
