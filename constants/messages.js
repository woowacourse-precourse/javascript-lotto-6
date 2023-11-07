const input = Object.freeze({
  purchaseAmount: '구입금액을 입력해주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const output = Object.freeze({
  lottoPurchased: '개를 구매했습니다.',
});

const game = Object.freeze({
  resultTitle: '\n당첨 통계',
  separator: '---',
  zeroRevenueRate: '총 수익률은 0%입니다.',
  noWinnning: '\n당첨되지 않았습니다. 다음 기회에 참여해주세요.',
});

const winning = Object.freeze({
  matchFiveAndBonus: '5개 일치, 보너스 볼 일치',
  matchN: '개 일치',
});

export const MESSAGES = Object.freeze({
  input,
  output,
  game,
  winning,
});
