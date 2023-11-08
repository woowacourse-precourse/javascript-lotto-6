const LOTTO_RULE = Object.freeze({
  RANGE: {
    MIN: 1,
    MAX: 45,
  },
  LENGTH: 6,
  UNIT: 1000,
});

const INPUT_MESSAGES = Object.freeze({
  BUY_INPUT: '구입금액을 입력해주세요',
  BUY_PRINT: (n) => `\n${n}개를 구매했습니다`,
  LOTTO_NUMBER: '당첨번호를 입력해주세요',
  BONUS_NUMBER: '보너스 번호를 입력해주세요',
});

const OUPUT_MESSAGES = Object.freeze({
  PLACE_HOLDER: '\n당첨 통계\n---\n',
  LOTTO_COUNT(lottoCount) {
    return `${lottoCount}개를 구매했습니다.`;
  },
  BUY_LOTTOS(lottos) {
    return `[${lottos.join(',')}]`;
  },
  PROFIT(profit) {
    return `총 수익률은 ${profit}%입니다.`;
  },
});

const ERROR_MESSAGES = Object.freeze({
  PREFIX: '[ERROR]',
  LOTTO: {
    NO_NUMBER: '로또 번호는 숫자여야 합니다.',
    NO_LENGTH: `로또 번호는 ${LOTTO_RULE.LENGTH}개여야 합니다.`,
    NO_UNIQUE: '로또 번호는 유일해야 합니다.',
    NO_POSITIVE: '로또 번호는 양수여야 합니다.',
    NO_INTEGER: '로또 번호는 정수여야 합니다.',
    NO_RANGE: `로또 번호는 ${LOTTO_RULE.RANGE.MIN}부터 ${LOTTO_RULE.RANGE.MAX} 사이의 숫자여야 합니다.`,
  },
  INPUT: {
    IS_EMPTY: '입력값이 없습니다.',
    NO_NUMBER: '입력값은 숫자여야 합니다.',
    NO_POSITIVE: '입력값은 양수여야 합니다.',
    NO_INTEGER: '입력값은 정수여야 합니다.',
  },
  BUY: {
    NO_NUMBER: '구매금액은 숫자여야 합니다.',
    NO_POSITIVE: '구매금액은 양수여야 합니다.',
    BUY_UNIT: `구매 금액은 ${LOTTO_RULE.UNIT}원 단위로 가능합니다.`,
  },
});

export { LOTTO_RULE, INPUT_MESSAGES, OUPUT_MESSAGES, ERROR_MESSAGES };
