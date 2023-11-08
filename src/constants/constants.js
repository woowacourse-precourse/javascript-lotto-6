export const INPUT_MESSAGE = {
  getMoney: "구입 금액을 입력해 주세요.\n",
  getLuckyNumbers: "당첨 번호를 입력해 주세요.\n",
  getBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
  printLottoCnt: (lottoCnt) => `총 ${lottoCnt}개를 구매했습니다.`,
  printLottoResult: "당첨 통계\n---",
  printRankMatch: (item) => `${item} 일치`,
  printRankResult: (match, prize, cnt) => `${match} (${prize.toLocaleString()}원) - ${cnt}개`,
  printProfit: (profit) => `총 수익률은 ${profit.toFixed(1)}%입니다.`
};

export const LOTTO = {
  length: 6,
  min: 1,
  max: 45,
  price: 1000,
  possibleSecondRank: 5
};

export const RANK = {
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
  fifth: "fifth"
};

// 일치한 갯수와 보너스 번호 일치 여부에 따른 등수
export const LOTTO_RANK = {
  3: RANK.fifth,
  4: RANK.fourth,
  5: {
    true: RANK.second,
    false: RANK.third
  },
  6: RANK.first
};

// 등수에 따른 당첨 금액
export const RANK_MONEY = {
  fifth: 5000,
  fourth: 50000,
  third: 1500000,
  second: 30000000,
  first: 2000000000,
};

// 등수에 따른 일치 조건
export const RANK_MATCH = {
  fifth: ["3개"],
  fourth: ["4개"],
  third: ["5개"],
  second: ["5개", "보너스 볼"],
  first: ["6개"]
};

Object.freeze(LOTTO);
Object.freeze(RANK);
Object.freeze(LOTTO_RANK);
Object.freeze(RANK_MONEY);
Object.freeze(RANK_MATCH);