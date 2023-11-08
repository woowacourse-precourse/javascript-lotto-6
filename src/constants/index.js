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
    },
  },
});
