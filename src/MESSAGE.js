const MESSAGE = Object.freeze({
  enterPrice: '구입금액을 입력해 주세요.\n',
  enterWinNumbers: '\n당첨 번호를 입력해 주세요.\n',
  enterBonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  purchasedLotto(amount) {
    return `\n${amount}개를 구매했습니다.`;
  },
  winningDetails(match) {
    return `\n당첨 통계
---
3개 일치 (5,000원) - ${match[3]}개
4개 일치 (50,000원) - ${match[4]}개
5개 일치 (1,500,000원) - ${match[5]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${match['5b']}개
6개 일치 (2,000,000,000원) - ${match[6]}개`;
  },
  profitRate(rate) {
    return `총 수익률은 ${rate}%입니다.`;
  },
  formatError(message) {
    return `[ERROR] ${message}`;
  },
});

export default MESSAGE;
