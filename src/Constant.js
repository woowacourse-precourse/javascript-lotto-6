export const LOTTO = Object.freeze({
  REG_NUMBER: /[^0-9]+/,
  PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  MATCH_THREE: 3,
  MATCH_FOUR: 4,
  MATCH_FIVE: 5,
  LOTTO_LENGHT: 6,
});

export const PRIZE_MONEY = Object.freeze({
  MATCH_COUNT: {
    THREE: 'FIFTH_PRIZE',
    FOUR: 'FOURTH_PRIZE',
    FIVE: 'THIRD_PRIZE',
    BONUS: 'SECOND_PRIZE',
    SIX: 'FIRST_PRIZE',
  },
  FIRST_PRIZE: 2000000000,
  SECOND_PRIZE: 30000000,
  THIRD_PRIZE: 1500000,
  FOURTH_PRIZE: 50000,
  FIFTH_PRIZE: 5000,
});

export const INPUT = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요.',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.',
});

export const OUTPUT = Object.freeze({
  PRINT_PURCHASE_QUANTITY: '개를 구매했습니다.\n',
  PRINT_WINNING_STATISTICS: '당첨 통계\n',
  PRINT_LINE: '---\n',
  COMMA: ',',
  PRINT_MATCH_THREE: count => `3개 일치 (5,000원) - ${count}개\n`,
  PRINT_MATCH_FOUR: count => `4개 일치 (50,000원) - ${count}개\n`,
  PRINT_MATCH_FIVE: count => `5개 일치 (1,500,000원) - ${count}개\n`,
  PRINT_MATCH_BONUS: count =>
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`,
  PRINT_MATCH_SIX: count => `6개 일치 (2,000,000,000원) - ${count}개\n`,
  PRINT_TOTAL_RETURN: number => `총 수익률은 ${number}%입니다.`,
});

export const ERROR = Object.freeze({
  PREFIX: '[ERROR]',
  NOT_PRICE_UNIT: `[ERROR] 로또 구입 금액은 ${LOTTO.PRICE.toLocaleString()}원 단위로 입력해주세요.`,
  PRICE_ONLY_NUMBER: '[ERROR] 로또 구입 금액은 숫자로만 입력해주세요.',
  NOT_LOTTO_LENGTH: '[ERROR] 로또 번호는 6개여야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 로또 번호가 중복되었습니다.',
  NOT_LOTTO_RANGE: '[ERROR] 로또 번호는 1~45 사이의 숫자를 입력해주세요.',
  BONUS_ONLY_NUMBER: '[ERROR] 보너스번호는 1~45 사이의 숫자로만 입력해주세요.',
  BONUS_NOT_WINNING:
    '[ERROR] 보너스번호는 당첨 번호에 없는 번호로 입력해주세요.',
});
