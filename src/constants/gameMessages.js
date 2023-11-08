const gameMessage = Object.freeze({
  INPUT: {
    MONEY: '구입금액을 입력해 주세요.\n',
    WINNING: '\n당첨 번호를 입력해 주세요.\n',
    BONUS: '\n보너스 번호를 입력해 주세요.\n',
  },

  OUTPUT: {
    QUANTITY: (quantity) => `\n${quantity}개를 구매했습니다.`,
    RESULT_TEXT: '\n당첨 통계\n---',
    RESULT: (match, reward, count) => `${match} (${reward}원) - ${count}개`,
    INCOME: (rate) => `총 수익률은 ${rate}%입니다.`,
  },
});
export default gameMessage;
