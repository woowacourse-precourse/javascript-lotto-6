const INPUT_MESSAGE = {
  INPUT_MONEY: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
};

const OUTPUT_MESSAGE = {
  LOTTO_TICKET_RESULT: '\n당첨 통계\n---',
  REWARD: [
    '3개 일치 (5,000원)',
    '4개 일치 (50,000원)',
    '5개 일치 (1,500,000원)',
    '5개 일치, 보너스 볼 일치 (30,000,000원)',
    '6개 일치 (2,000,000,000원)',
  ],
};

const LOTTO = {
  MIN_AMOUNT: 1000,
  AMOUNT_UNIT: 1000,
  COUNT: 6,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  FIFTH_PLACE: 5000,
  FIRST_PLACE_MATCH: 6,
  SECOND_OR_THIRD_PLACE_MATCH: 5,
  FOURTH_PLACE_MATCH: 4,
  FIFTH_PLACE_MATCH: 3,
};

const ERROR_SCOPE = {
  AMOUNT: '구입금액은',
  LOTTO: '로또 번호는',
  WINNIG: '당첨 번호는',
  BOUNUS: '보너스 번호는',
};

const ERROR_MESSAGE = {
  LOGO: '[ERROR]',
  IS_INTEGER: '특수문자, 영문자, 소수를 입력할 수 없습니다.',
  NO_START_ZERO: '0으로 시작하는 숫자를 입력 수 없습니다.',
  NO_LESS_MIN_AMOUNT: `${ERROR_SCOPE.AMOUNT} ${LOTTO.MIN_AMOUNT}이상 이어야 합니다.`,
  IS_UNIT: `${ERROR_SCOPE.AMOUNT} ${LOTTO.AMOUNT_UNIT}단위 이어야 합니다.`,
  IS_COUNT: `${LOTTO.COUNT}개 이어야 합니다.`,
  NO_DUPLICATION: '중복될 수 없습니다.',
  IS_NUMBER_RANGE: `${LOTTO.MIN_NUMBER}~${LOTTO.MAX_NUMBER} 사이의 수 이여야 합니다.`,
};

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE, ERROR_SCOPE, LOTTO };
