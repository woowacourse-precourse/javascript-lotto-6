import WINNING_AMOUNT_STRING from './WinningAmount';

export const MESSAGE_GET = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요. \n',
  WINNING_NUMBER: '당첨 번호를 입력해 주세요. \n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요. \n',
});

export const MESSAGE_PRINT = Object.freeze({
  LOTTO_AMOUNT: '개를 구매했습니다. \n',
  STATISTICS: '당첨 통계 \n--- \n',
  COUNT_UNIT: '개 \n',
  LOTTO_NUMBER_HEAD: '[',
  LOTTO_NUMBER_TAIL: ']',
  TOTAL_RATE_HEAD: '총 수익률은 ',
  TOTAL_RATE_TAIL: '%입니다. \n',
});

const RESULT_STATISTICS = Object.freeze({
  FIRST: `6개 일치 (${WINNING_AMOUNT_STRING.FIRST}원) - `,
  SECOND: `5개 일치, 보너스 볼 일치 (${WINNING_AMOUNT_STRING.SECOND}원) - `,
  THIRD: `5개 일치 (${WINNING_AMOUNT_STRING.THIRD}원) - `,
  FOURTH: `4개 일치 (${WINNING_AMOUNT_STRING.FOURTH}원) - `,
  FIFTH: `3개 일치 (${WINNING_AMOUNT_STRING.FIFTH}원) - `,
});

export const MESSAGE_RESULT_STATISTICS = [
  RESULT_STATISTICS.FIRST,
  RESULT_STATISTICS.SECOND,
  RESULT_STATISTICS.THIRD,
  RESULT_STATISTICS.FOURTH,
  RESULT_STATISTICS.FIFTH,
];
