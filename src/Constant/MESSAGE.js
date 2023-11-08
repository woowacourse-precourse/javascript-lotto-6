export const INPUT_MESSAGE = Object.freeze({
  purchaseAmountInput: '구입금액을 입력해 주세요.\n',
  commonWinNumInput: '당첨 번호를 입력해 주세요.\n',
  bonusWinNumInput: '보너스 번호를 입력해 주세요.\n',
});

export const LOTTO_COUNT_MESSAGE = Object.freeze({
  lottoCount(count) {
    return `\n${count}개를 구매했습니다.`;
  },
});

export const WIN_COUNT_MESSAGE = Object.freeze({
  winCount(cnt, money, result) {
    if (cnt > 0) {
      return `${cnt}개 일치 (${money}원) - ${result}개`;
    }
    if (cnt < 0) {
      return `${-cnt}개 일치, 보너스 볼 일치 (${money}원) - ${result}개`;
    }
  },
});
