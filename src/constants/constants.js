const LOTTO_PRICE = 1000;

const NUMBER_BOUNDS = {
  MIN: 1,
  MAX: 45,
  COUNT: 6,
};

const MESSAGES = {
  INPUT: {
    PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
    WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  },
  OUTPUT: {
    PURCHASE_LOTTO_NUMBER: '개를 구매했습니다.',
    STATISTIC: {
      TITLE: '당첨 통계',
      DIVIDE_LINE: '---',
      RESULT: {
        FIFTH: (count) => `3개 일치 (5,000원) - ${count}개`,
        FOURTH: (count) => `4개 일치 (50,000원) - ${count}개`,
        THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개`,
        SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`,
        FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개`,
      },
      RATIO: (percent) => `총 수익률은 ${percent}%입니다.`,
    },
  },
  ERROR: {
    LOTTO_PURCHASE_PRICE_NOT_A_MULTIPLE_OF_1000_EXCEPTION: `[ERROR] 로또 구입 금액이 ${LOTTO_PRICE}원 단위가 아닙니다.`,
    COUNTS_OF_LOTTO_NUMBER_EXCEPTION: '[ERROR] 로또 번호는 6개여야 합니다.',
    LOTTO_NUMBER_DUPLICATION_EXCEPTION: '[ERROR] 로또 번호가 중복되었습니다.',
    BONUS_NUMBER_DUPLICATION_EXCEPTION: '[ERROR] 보너스 번호가 당첨 번호와 중복되었습니다.',
    LOTTO_NUMBER_OUT_OF_BOUNDS_EXCEPTION: '[ERROR] 로또 번호의 범위가 1 ~ 45 사이를 벗어났습니다.',
  },
};

export { LOTTO_PRICE, MESSAGES, NUMBER_BOUNDS };
