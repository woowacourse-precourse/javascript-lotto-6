import { LOTTO } from './lottoGame.js';

export const INPUT_MESSAGE = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGE = Object.freeze({
  PURCASE_QUANTITY: (count) => `\n${count}개를 구매했습니다.`,
  WINNINGS_RATE: (winningsRate) => `총 수익률은 ${winningsRate}%입니다.`,
  WINNING_RESULT: (numbers, bonus, prize, winningAmount) =>
    `${numbers}개 일치${
      bonus ? ', 보너스 볼 일치' : ''
    } (${prize}원) - ${winningAmount}개`,
});

const ERROR = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  UNIT: `${ERROR} 구매 금액은 ${LOTTO.PRICE}원 단위여야 합니다.`,
  AVAILABILITY: `${ERROR} 구매 금액은 ${LOTTO.PRICE}원 이상이어야 합니다.`,
  NUMBER_TYPE: `${ERROR} 구매 금액은 ${LOTTO.PRICE}원 단위로 된 숫자여야 합니다.`,
  LENGTH: `${ERROR} 로또 번호는 ${LOTTO.LENGTH}개여야 합니다.`,
  RANGE: `${ERROR} 로또 번호는 ${LOTTO.MIN_NUMBER}부터 ${LOTTO.MAX_NUMBER} 사이의 숫자여야 합니다.`,
  DUPLICATION: `${ERROR} 로또 번호는 중복된 숫자가 없어야 합니다.`,
  INCLUSION: `${ERROR} 보너스 번호는 당첨 번호에 포함되지 않은 숫자여야 합니다.`,
});
