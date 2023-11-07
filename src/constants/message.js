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
