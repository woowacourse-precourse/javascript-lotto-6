export const LOTTO_GAME = Object.freeze({
  PRICE_UNIT: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  TOTAL_NUMBERS: 6,
});

export const INPUT_MESSAGES = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  PURCHASED_LOTTOS: (num) => `\n${num}개를 구매했습니다.`,
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const ERROR_MESSAGES = Object.freeze({
  PREFIX: '[ERROR]',
  INVALID_AMOUNT_RANGE: '구입금액은 1000원 이상, 1000원 단위로 입력해주세요.',
  INVALID_AMOUNT_TYPE: '구입 금액은 숫자를 입력해주세요.',
  INVALID_NUMBER_COUNT: '로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBERS: '로또 번호는 중복될 수 없습니다.',
  INVALID_BONUS_NUMBER_TYPE: '보너스 번호는 숫자여야 합니다.',
  INVALID_BONUS_NUMBER_RANGE: '보너스 번호는 1~45 사이의 정수여야 합니다.',
  DUPLICATE_BONUS_NUMBER: '보너스 번호는 당첨 번호와 중복될 수 없습니다.',
});

export const PRIZE_VALUES = Object.freeze({
  3: 5000,
  4: 50000,
  5: 1500000,
  6: 2000000000,
  '5B': 30000000,
});

export const LOTTO_RESULT_MESSAGES = Object.freeze({
  WINNING_STATISTICS: '\n당첨 통계\n---',
  MATCHING_NUMBERS: (matchCount, prizeMoney, count) =>
    `${matchCount}개 일치 (${prizeMoney.toLocaleString()}원) - ${count}개`,
  MATCHING_NUMBERS_WITH_BONUS: (prizeMoney, count) =>
    `5개 일치, 보너스 볼 일치 (${prizeMoney.toLocaleString()}원) - ${count}개`,
});
