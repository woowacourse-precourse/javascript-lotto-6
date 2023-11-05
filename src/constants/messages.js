export const INPUT_MESSAGES = Object.freeze({
  PURCHASE_AMOUNT: '구입금액을 입력해 주세요.\n',
  WINNING_LOTTO_NUMBERS: '당첨 번호를 입력해 주세요.\n',
  WINNING_BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
});

export const OUTPUT_MESSAGES = Object.freeze({
  printLottosCount: lottoCount => `${lottoCount}개를 구매했습니다.`,
  printLottoNumbers: lotto => `[${lotto.getNumbers().join(', ')}]`,
  printLottoROI: lottoROI => `총 수익률은 ${lottoROI}%입니다.`,
});
