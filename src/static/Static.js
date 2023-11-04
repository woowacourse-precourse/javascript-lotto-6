const STATIC_NUMBER = Object.freeze({
  pricePerLotto: 1000,
  minLottoNum: 1,
  maxLottoNum: 45,
  LottoNumLen: 6,
});

const SEPARATOR = Object.freeze({
  lottoNumSeparator: ",",
});

const PRINT_MESSAGE = Object.freeze({
  quantity: "개를 구매했습니다.",
});

const ASK_MESSAGE = Object.freeze({
  purchasePrice: "구입금액을 입력해 주세요.\n",
  winningNums: "\n당첨 번호를 입력해 주세요.\n",
  bonusNum: "\n보너스 번호를 입력해 주세요.\n",
});

export { STATIC_NUMBER, SEPARATOR, PRINT_MESSAGE, ASK_MESSAGE };
