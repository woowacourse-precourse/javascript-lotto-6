export const inputMessages = {
  MONEY: '구입금액을 입력해 주세요.\n',
  WINNING_LOTTO: '당첨 번호를 입력해 주세요.\n',
  BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
};

export const outputMessages = {
  BUY: (count) => `\n${count}개를 구매했습니다.\n`,
  RESULT: (result) => `\n당첨 통계\n${result}`,
  FIR: (count) => `6개 일치 (2,000,000,000원) - ${count}개\n`,
  SEC: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`,
  THI: (count) => `5개 일치 (1,500,000원) - ${count}개\n`,
  FOR: (count) => `4개 일치 (50,000원) - ${count}개\n`,
  FIF: (count) => `3개 일치 (5,000원) - ${count}개\n`,
  BENEFIT: (count) => `총 수익률은 ${count}%입니다.`,
};
