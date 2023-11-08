export const PURCHASE = {
  UNIT: 1000,
};

export const RANK = {
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
  0: 0,
};

export const DISPLAY = {
  LINE_BREAK: '\n',
  DASH: '-',
  COUNT_UNIT: '개',
};

export const GAME = {
  COST: `구입금액을 입력해 주세요.${DISPLAY.LINE_BREAK}`,
  TICKETS_PURCHASED: '개를 구매했습니다.',
  INPUT_WINNING_NUMBERS: `당첨 번호를 입력해 주세요.${DISPLAY.LINE_BREAK}`,
  INPUT_BONUS_NUMBER: `보너스 번호를 입력해 주세요.${DISPLAY.LINE_BREAK}`,
  WINNING_STATS: '당첨 통계',
  SEPARATOR: '---',
  TOTAL_EARNING_RATE: '총 수익률은 {}%입니다.',
  PERCENTAGE: '%입니다.',
};

export const RESULT = {
  1: `6개 일치 (2,000,000,000원) ${DISPLAY.DASH} `,
  2: `5개 일치, 보너스 볼 일치 (30,000,000원) ${DISPLAY.DASH} `,
  3: `5개 일치 (1,500,000원) ${DISPLAY.DASH} `,
  4: `4개 일치 (50,000원) ${DISPLAY.DASH} `,
  5: `3개 일치 (5,000원) ${DISPLAY.DASH} `,
};

const PREFIX = '[ERROR]';

export const ERROR = {
  INVALID_UNIT: `${PREFIX} 구입 금액은 1,000원 단위로 입력해야 합니다.`,
  INVALID_LENGTH: `${PREFIX} 6개의 당첨번호를 입력해야 합니다.`,
  OUT_OF_RANGE: `${PREFIX} 로또 번호의 숫자 범위는 1에서 45까지의 수입니다.`,
  DUPLICATE_NUMBER: `${PREFIX} 중복되는 번호가 존재합니다.`,
  INVALID_NUMBER_FORMAT: `${PREFIX} 유효하지 않은 숫자 형식입니다.`,
  DUPLICATE_WINNING_NUMBER: `${PREFIX} 보너스 번호가 당첨 번호와 중복됩니다.`,
  BONUS_NUMBER_IS_OUT_OF_RANGE: `${PREFIX} 보너스 번호의 숫자 범위는 1에서 45까지의 수입니다.`,
};
