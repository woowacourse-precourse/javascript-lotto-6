const input = Object.freeze({
  paperMoney: '구입금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const output = Object.freeze({
  winningResultsStats: '\n당첨 통계\n---',
  buyingResults: '{0}개를 구매했습니다.',
});

const GAME_GUIDE_MESSAGE = Object.freeze({
  input,
  output,
});

export default GAME_GUIDE_MESSAGE;
