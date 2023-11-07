const input = Object.freeze({
  amountToPurchase: "구입금액을 입력해 주세요.\n",
  winningNumbers: "\n당첨 번호를 입력해 주세요.\n",
  bonusNumber: "\n보너스 번호를 입력해 주세요.\n",
});

const output = Object.freeze({
  winningStatistics: "\n당첨 통계\n---",
});

const LOTTO_INTERFACE = Object.freeze({
  input,
  output,
});

export default LOTTO_INTERFACE;
