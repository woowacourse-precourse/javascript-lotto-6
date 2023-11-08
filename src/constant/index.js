export const INPUT_MESSAGE = Object.freeze({
  AMOUNT_TO_BUY: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBER: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  WINNING_STATISTICS: '당첨 통계',
  STATISTICS: '\n당첨 통계\n---------',
  TOTAL_LOTTO_COUNT: (count) => `\n${count}개를 구매했습니다.`,
  LOTTO_NUMBER: (numbers) => `[${numbers.join(', ')}]`,
  WINNING_COUNT: (amount, count) => `(${amount.toLocaleString()}원) - ${count}개`,
  PROFIT_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
});

export const LOTTO = Object.freeze({
  PRICE: 1000,
  RANGE: {
    START: 1,
    END: 45,
  },
  COUNT: 6,
  WINNING: {
    FIRST: {
      PRIZE: 2000000000,
      COUNT: 6,
    },
    SECOND: {
      PRIZE: 30000000,
      COUNT: 5,
    },
    THIRD: {
      PRIZE: 1500000,
      COUNT: 5,
    },
    FOURTH: {
      PRIZE: 50000,
      COUNT: 4,
    },
    FIFTH: {
      PRIZE: 5000,
      COUNT: 3,
    },
    NONE: {
      PRIZE: 0,
      COUNT: 0,
    },
  },
});

export const ERROR = Object.freeze({
  IS_EMPTY: '값을 입력해주세요.\n',
  IS_NOT_POSITIVE_INTEGER: '양의 정수를 입력해주세요.\n',
  IS_LESS_THAN_LOTTO_PRICE: `로또 구입 금액은 ${LOTTO.PRICE}원 이상이어야 합니다.\n`,
  IS_NOT_MULTIPLY_OF_LOTTO_PRICE: `로또 구입 금액은 ${LOTTO.PRICE}원 단위로 가능합니다.\n`,
  IS_NOT_LOTTO_LENGTH: `로또 번호는 ${LOTTO.COUNT}개여야 합니다.\n`,
  IS_DUPLICATED: '로또 번호에 중복된 숫자가 있습니다.\n',
  IS_NOT_IN_LOTTO_RANGE: `로또 번호는 ${LOTTO.RANGE.START} ~ ${LOTTO.RANGE.END} 사이의 숫자여야 합니다.\n`,
  PREFIX: '[ERROR]',
});

export const FIXED_POINT = 1;
export const RATE = 100;

export const WINNING_NUMBER_DELIMITER = ',';

export const REGEX_POSITIVE_INTEGER = /^[0-9]*$/;
