const RANK = {
  FIRST: "6개 일치",
  SECOND: "5개 일치, 보너스 볼 일치",
  THIRD: "5개 일치",
  FOURTH: "4개 일치",
  FIFTH: "3개 일치",
};

const PRIZE = {
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
};

Object.freeze(RANK, PRIZE);
export default { RANK, PRIZE };
