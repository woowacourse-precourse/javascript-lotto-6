export const INPUT_MESSAGE = {
  getMoney: "구입 금액을 입력해 주세요.\n",
  getLuckyNumbers: "당첨 번호를 입력해 주세요.\n",
  getBonusNumber: "\n보너스 번호를 입력해 주세요.\n",
};

export const LOTTO = {
  length: 6,
  min: 1,
  max: 45,
  price: 1000
};

// 일치한 갯수와 보너스 번호 일치 여부에 따른 등수
export const LOTTO_RANK = {
  3: "fifth",
  4: "fourth",
  5: {
    true: "second",
    false: "third"
  },
  6: "first"
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

Object.freeze(LOTTO_RANK);