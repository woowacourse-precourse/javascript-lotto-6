export const MESSAGES = Object.freeze({
  INPUT_AMOUNT: '구입금액을 입력해 주세요.\n',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.\n',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.\n',

  OUTPUT_BUY_TICKETS: (num) => `\n${num}개를 구매했습니다.`,
  OUTPUT_RESULT_TITLE: '\n당첨 통계\n---',
  OUTPUT_RESULT_DETAILS: (rank, { winningCount, matchCount }) => {
    const reward = REWARDS[rank].toLocaleString('ko-KR');
    const bonusMessage = rank === 2 ? ', 보너스 볼 일치' : '';

    return `${matchCount}개 일치${bonusMessage} (${reward}원) - ${winningCount}개`;
  },
  OUTPUT_RETURN: (num) => `총 수익률은 ${num}%입니다.`,
});

export const RANK = Object.freeze({
  5: '5th',
  4: '4th',
  3: '3rd',
  2: '2nd',
  1: '1st',
});

export const REWARDS = Object.freeze({
  5: 5000,
  4: 50000,
  3: 1500000,
  2: 30000000,
  1: 2000000000,
});

export const TICKET_PRICE = 1000;
