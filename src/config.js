// 당첨 enum 으로 표현
export const LOTTO = Object.freeze({
  PRICE: 1000,
  RANGE: {
    START: 1,
    END: 45,
  },
  COUNT: 6,
  WIN: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOURTH: 50000,
    FIFTH: 5000,
    NONE: 0,
  },
});

export const ERROR = Object.freeze({
  IS_EMPTY: '[ERROR] 값을 입력해주세요.\n',
  IS_NOT_POSITIVE_INTEGER: '[ERROR] 정수를 입력해주세요.\n',
  IS_LESS_THAN_LOTTO_PRICE: `[ERROR] 로또 구입 금액은 ${LOTTO.PRICE}원 이상이어야 합니다.\n`,
  IS_NOT_MULTIPLY_OF_LOTTO_PRICE: `[ERROR] 로또 구입 금액은 ${LOTTO.PRICE}원 단위로 가능합니다.\n`,
  IS_NOT_LOTTO_LENGTH: `[ERROR] 로또 번호는 ${LOTTO.COUNT}개여야 합니다.\n`,
  IS_DUPLICATED: '[ERROR] 로또 번호에 중복된 숫자가 있습니다.\n',
  IS_NOT_IN_LOTTO_RANGE: `[ERROR] 로또 번호는 ${LOTTO.RANGE.START} ~ ${LOTTO.RANGE.END} 사이의 숫자여야 합니다.\n`,
});

export const WINNING_NUMBER_DELIMITER = ',';
