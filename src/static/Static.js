const STATIC_NUMBER = Object.freeze({
  pricePerLotto: 1000,
  minLottoNum: 1,
  maxLottoNum: 45,
  LottoNumLen: 6,
});

const MATCHED_COUNT = Object.freeze({
  three: "three",
  four: "four",
  five: "five",
  fiveAndBonus: "fiveAndBonus",
  six: "six",
});

const SEPARATOR = Object.freeze({
  lottoNum: ",",
});

const MESSAGE_ALERT = Object.freeze({
  quantity: "개를 구매했습니다.",
  beforeResult: "\n당첨 통계\n---",
});

const MESSAGE_RESULT = Object.freeze({
  three: "3개 일치 (5,000원)",
  four: "4개 일치 (50,000원)",
  five: "5개 일치 (1,500,000원)",
  fiveAndBonus: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  six: "6개 일치 (2,000,000,000원)",
});

const MESSAGE_ASK = Object.freeze({
  purchasePrice: "구입금액을 입력해 주세요.\n",
  winningNums: "\n당첨 번호를 입력해 주세요.\n",
  bonusNum: "\n보너스 번호를 입력해 주세요.\n",
});

export {
  STATIC_NUMBER,
  MATCHED_COUNT,
  SEPARATOR,
  MESSAGE_ALERT,
  MESSAGE_RESULT,
  MESSAGE_ASK,
};
