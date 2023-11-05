export const Constant = Object.freeze({
  THOUSAND: 1000,
});

export const LOTTO = Object.freeze({
  REG_NUMBER: /[^0-9]+/,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  LOTTOS_LENGHT: 6,
  PRICE: 1000,
  FIRST_PLACE: 2000000000,
  SECOND_PLACE: 30000000,
  THIRD_PLACE: 1500000,
  FOURTH_PLACE: 50000,
  FIFTH_PLACE: 5000,
});

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PRINT_PURCHASE_QUANTITY: '개를 구매했습니다.',
  PRINT_WINNING_STATISTICS: '당첨 통계',
  PRINT_LINE: '---',
  PRINT_MATCH: (matches, matchCount) =>
    `${matches}개 일치 (${LOTTO.FIRST_PLACE.toLocaleString()}원) - ${matchCount}개`,
  PRINT_MATCH_BONUS: matchCount =>
    `5개 일치, 보너스 볼 일치 (${LOTTO.SECOND_PLACE.toLocaleString()}원) - ${matchCount}개`,
  PRINT_TOTAL_RETURN: '총 수익률은 $n%입니다.',
});

export const ERROR = Object.freeze({
  NOT_PRICE_UNIT: `[ERROR] 로또 구입 금액은 ${LOTTO.PRICE.toLocaleString()}원 단위로 입력해주세요.`,
  INPUT_ONLY_NUMBER: '[ERROR] 로또 구입 금액은 숫자로만 입력해주세요.',
});
