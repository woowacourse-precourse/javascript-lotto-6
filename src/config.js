export const LOTTO = {
  PRICE: 1000,
  RANGE: {
    START: 1,
    END: 45,
  },
  COUNT: 6,
};

export const ERROR = Object.freeze({
  IS_EMPTY: '[ERROR] 값을 입력해주세요.\n',
  IS_NOT_INTEGER: '[ERROR] 정수를 입력해주세요.\n',
  IS_LESS_THAN_LOTTO_PRICE: `[ERROR] 로또 구입 금액은 ${LOTTO.PRICE}원 이상이어야 합니다.\n`,
  IS_NOT_MULTIPLY_OF_LOTTO_PRICE: `[ERROR] 로또 구입 금액은 ${LOTTO.PRICE}원 단위로 가능합니다.\n`,
});
