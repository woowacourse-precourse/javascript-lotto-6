const STATIC_NUMBER = Object.freeze({
  pricePerLotto: 1000,
  minLottoNum: 1,
  maxLottoNum: 45,
  LottoNumLen: 6,
});

const RANK = Object.freeze({
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
  fifth: "fifth",
});

const RETURN_MONEY = Object.freeze({
  [RANK.first]: 2000000000,
  [RANK.second]: 30000000,
  [RANK.third]: 1500000,
  [RANK.fourth]: 50000,
  [RANK.fifth]: 5000,
});

const MESSAGE_RESULT = Object.freeze({
  [RANK.first]: "6개 일치 (2,000,000,000원)",
  [RANK.second]: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  [RANK.third]: "5개 일치 (1,500,000원)",
  [RANK.fourth]: "4개 일치 (50,000원)",
  [RANK.fifth]: "3개 일치 (5,000원)",
});

const SEPARATOR = Object.freeze({
  lottoNum: ",",
});

const MESSAGE_ALERT = Object.freeze({
  quantity: "개를 구매했습니다.",
  beforeResult: "\n당첨 통계\n---",
});

const MESSAGE_ASK = Object.freeze({
  purchasePrice: "구입금액을 입력해 주세요.\n",
  winningNums: "당첨 번호를 입력해 주세요.\n",
  bonusNum: "보너스 번호를 입력해 주세요.\n",
});

export {
  STATIC_NUMBER,
  RETURN_MONEY,
  RANK,
  SEPARATOR,
  MESSAGE_ALERT,
  MESSAGE_RESULT,
  MESSAGE_ASK,
};
