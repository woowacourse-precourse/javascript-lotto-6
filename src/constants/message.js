import { NUMERIC_COMMA_EXPRESSION } from './regexp.js';

const MESSAGE = Object.freeze({
  PURCHASING_MESSAGE: '구입 금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요\n',
  WINNING_STATISICS: '\n당첨 통계\n---',
  COMMA: ',',
});

const MESSAGE_MATCHING = Object.freeze({
  three: (number = 0) => `3개 일치 (5,000원) - ${number}개`,
  four: (number = 0) => `4개 일치 (50,000원) - ${number}개`,
  five: (number = 0) => `5개 일치 (1,500,000원) - ${number}개`,
  fiveAndBonus: (number = 0) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${number}개`,
  six: (number = 0) => `6개 일치 (2,000,000,000원) - ${number}개`,
});

const MESSAGE_MAKE_FN = Object.freeze({
  makeNumberOfLottoMessageFn: (number = 0) => `\n${number}개를 구매했습니다.`,
  makeRateOfReturnMessageFn: (number = 0) => {
    const numberString = String(number.toFixed(1)).replace(NUMERIC_COMMA_EXPRESSION, MESSAGE.COMMA);
    return `총 수익률은 ${numberString}%입니다.`;
  },
});

export const MESSAGE_OBJECT = Object.freeze({
  MESSAGE,
  MESSAGE_MATCHING,
  MESSAGE_MAKE_FN,
});

export { MESSAGE, MESSAGE_MATCHING, MESSAGE_MAKE_FN };
