export const MATCH_COUNT_PRIZES = {
  3: 5000,
  4: 50000,
  5: 1500000,
  '5_and_bonus': 30000000,
  6: 2000000000,
};

export const INPUT_MESSAGE = {
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

export const OUTPUT_MESSAGE = {
  PURCHASE_CONFIRM: (number) => `${number}개를 구매했습니다.`,
  RESULT_HEADER: '당첨 통계\n---',
  RESULT_ROW: (matchCount, winCount = 0) => {
    const prize = MATCH_COUNT_PRIZES[matchCount];
    return `${matchCount}개 일치 (${prize.toLocaleString()}원) - ${winCount}개`;
  },
  TOTAL_RETURN_RATE: (rate) => `총 수익률은 ${rate}%입니다.`,
};

export const NEW_LINE = '\n';

export const ERROR_MESSAGE = {
  HEADER_PREFIX: '[ERROR]',
  INVALID_UNIT: '1,000원 단위로 입력해주세요.',
  INVALID_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_EMPTY: '빈 문자열은 허용되지 않습니다.',
  INVALID_NUMBER_COUNT: '6개의 번호를 입력해주세요.',
  INVALID_BONUS_NUMBER_COUNT: '1개의 보너스 번호를 입력해주세요.',
  DUPLICATE_NUMBERS: '중복된 숫자가 있습니다. 다시 입력해주세요.',
};

export default {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  NEW_LINE,
  ERROR_MESSAGE,
};
