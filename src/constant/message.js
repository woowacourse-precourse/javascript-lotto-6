export const MESSAGE = {
  enterPurchaseAmount: '구입금액을 입력해 주세요.\n',
  enterWinningNumbers: '당첨 번호를 입력해 주세요.\n',
  enterBonusNumber: '보너스 번호를 입력해 주세요.\n',
  purchasedQuantity: (quantity) => `${quantity}개를 구매했습니다.`,
  winningStatistics: '당첨 통계',
  line: '---',
  rankResult: (match, prize, count) => `${match}개 일치 (${prize}원) - ${count}개`,
  bonusRankResult: (match, prize, count) =>
    `${match}개 일치, 보너스 볼 일치 (${prize}원) - ${count}개`,
  totalProfit: (profit) => `총 수익률은 ${profit}%입니다.`,
};

export const ERROR = {
  errorPrefix: '[ERROR]',
  isEmpty: '공백이 입력되었습니다. 다시 입력해주세요.',
};

export const SEPARATOR = ',';
