export const LOTTO_PRICE = 1000;
export const LOTTO_MIN_NUMBER = 1;
export const LOTTO_MAX_NUMBER = 45;
export const LOTTO_NUMBERS_LENGTH = 6;
export const MIN_MATCHING_COUNTS_FOR_PRIZE = 3;
export const MATCHING_WINNING_COUNTS_FOR_USING_BONUS_NUMBER = 5;
export const WINNING_NUMBER_WEIGHT = 1;
export const BONUS_NUMBER_WEIGHT = 0.5;
export const PERCENT_CONVERSION_NUMBER = 100;
export const LAST_DECIMAL_PLACE_TO_DISPLAY = 1;

export const GUIDE_MESSAGES = Object.freeze({
  ENTER_PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  ENTER_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  ENTER_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const PURCHASE_AMOUNT_ERROR_MESSAGES = Object.freeze({
  NOT_NUMBER: '[ERROR] 구입 금액은 숫자여야 합니다',
  START_WITH_ZERO: '[ERROR] 구입 금액이 0으로 시작합니다.',
  LESS_THAN_LOTTO_PRICE: '[ERROR] 로또 한장보다 적은 구입 금액입니다.',
  NOT_DIVISIBLE_BY_THOUSAND: `[ERROR] 1,000원으로 나누어 떨어지지 않는 구입 금액입니다.`,
});

export const WINNING_NUMBERS_ERROR_MESSAGES = Object.freeze({
  INVALID_NUMBERS_LENGTH: `[ERROR] 당첨 번호는 ${LOTTO_NUMBERS_LENGTH}개여야 합니다.`,
  NOT_NUMBER: '[ERROR] 당첨 번호는 숫자여야 합니다',
  OUT_OF_RANGE: `[ERROR] 당첨 번호는 ${LOTTO_MIN_NUMBER} 이상 ${LOTTO_MAX_NUMBER} 이하의 숫자여야 합니다.`,
  DUPLICATED: `[ERROR] 중복되는 당첨번호가 있습니다.`,
});

export const BONUS_NUMBER_ERROR_MESSAGES = Object.freeze({
  NOT_NUMBER: '[ERROR] 보너스 번호는 숫자여야 합니다',
  OUT_OF_RANGE: `[ERROR] 보너스 번호는 ${LOTTO_MIN_NUMBER} 이상 ${LOTTO_MAX_NUMBER} 이하의 숫자여야 합니다.`,
  DUPLICATED_WITH_WINNING_NUMBER: `[ERROR] 당첨 번호와 동일한 보너스 번호가 있습니다.`,
});

export const LOTTO_NUMBERS_ERROR_MESSAGES = Object.freeze({
  NOT_ARRAY: '[ERROR] 로또 번호가 배열의 형태로 주어지지 않았습니다.',
  NOT_NUMERIC: '[ERROR] 로또 번호는 숫자형이여야 합니다.',
  INVALID_LOTTO_NUMBERS_LENGTH: `[ERROR] 로또 번호는 ${LOTTO_NUMBERS_LENGTH}개여야 합니다.`,
  OUT_OF_RANGE: `[ERROR] 로또 번호는 ${LOTTO_MIN_NUMBER} 이상 ${LOTTO_MAX_NUMBER} 이하의 숫자여야 합니다.`,
  DUPLICATED: `[ERROR] 중복되는 로또번호가 있습니다.`,
});

export const GAEM_RESULT_MESSAGE = `\n당첨 통계\n---`;

export const NUMBER_OF_PURCHASED_LOTTO_MESSAGE = (numberOfLottos) =>
  `\n${numberOfLottos}개를 구매했습니다.`;

export const RATE_OF_RETURN_OUTPUT_FORMAT = (rateOfReturn) =>
  `총 수익률은 ${rateOfReturn}%입니다.`;

export const WINNING_PRIZE_BY_COUNT = Object.freeze({
  3: 5000,
  4: 50000,
  5: 1500000,
  5.5: 30000000,
  6: 2000000000,
});

export const WINNING_DESCRIPTION_BY_COUNT = Object.freeze({
  3: `3개 일치 (5,000원)`,
  4: `4개 일치 (50,000원)`,
  5: `5개 일치 (1,500,000원)`,
  5.5: `5개 일치, 보너스 볼 일치 (30,000,000원)`,
  6: `6개 일치 (2,000,000,000원)`,
});
