import { deepFreeze } from '../utils/index.js';

export const MATCH_COUNT_PRIZES = deepFreeze(
  new Map([
    ['3', { prize: 5000, text: '3개 일치' }],
    ['4', { prize: 50000, text: '4개 일치' }],
    ['5', { prize: 1500000, text: '5개 일치' }],
    ['5_bonus', { prize: 30000000, text: '5개 일치, 보너스 볼 일치' }],
    ['6', { prize: 2000000000, text: '6개 일치' }],
  ]),
);

export const OUTPUT_MESSAGE = {
  PURCHASE_CONFIRM: (number) => `${number}개를 구매했습니다.\n`,
  RESULT_HEADER: '\n당첨 통계\n---',
  RESULT_ROW: (key, winCount = 0) => {
    const prizeInfo = MATCH_COUNT_PRIZES.get(key);
    const prize = prizeInfo.prize.toLocaleString();
    const text = prizeInfo.text;
    return `${text} (${prize}원) - ${winCount}개`;
  },
  TOTAL_RETURN_RATE: (rate) => `총 수익률은 ${parseFloat(rate.toFixed(2))}%입니다.`,
};

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const NEW_LINE = '\n';

export const ERROR_MESSAGE = Object.freeze({
  HEADER_PREFIX: '[ERROR]',
  INVALID_UNIT: '1,000원 단위로 입력해주세요.',
  INVALID_NUMBER_RANGE: '로또 번호는 1부터 45 사이의 숫자여야 합니다.',
  INVALID_EMPTY: '빈 문자열은 허용되지 않습니다.',
  INVALID_NUMBER_COUNT: '6개의 번호를 입력해주세요.',
  INVALID_BONUS_NUMBER_COUNT: '1개의 보너스 번호를 입력해주세요.',
  DUPLICATE_NUMBERS: '중복된 숫자가 있습니다. 다시 입력해주세요.',
});

export default {
  MATCH_COUNT_PRIZES,
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  NEW_LINE,
  ERROR_MESSAGE,
};
