const PRIZE = Object.freeze({
  first: "1등",
  second: "2등",
  third: "3등",
  fourth: "4등",
  fifth: "5등",
});

const PRIZE_CONDITION = Object.freeze({
  [PRIZE.first]: "6개 일치",
  [PRIZE.second]: "5개 일치, 보너스 볼 일치",
  [PRIZE.third]: "5개 일치",
  [PRIZE.fourth]: "4개 일치",
  [PRIZE.fifth]: "3개 일치",
});

const PROFIT_FOR_PRIZE = Object.freeze({
  [PRIZE.first]: 2_000_000_000,
  [PRIZE.second]: 30_000_000,
  [PRIZE.third]: 1_500_000,
  [PRIZE.fourth]: 50_000,
  [PRIZE.fifth]: 5_000,
});

const PRIZE_FOR_COUNT = Object.freeze({
  6: PRIZE.first,
  // 2등은 보너스 여부를 파악해야 하므로 별도의 메소드에서 직접 반환
  5: PRIZE.third,
  4: PRIZE.fourth,
  3: PRIZE.fifth,
});

const LOTTO_PRICE = 1000;

const getPrizeFromCorrectCount = ({ correctCount, isGotBonus }) => {
  if (correctCount === 5 && isGotBonus) return PRIZE.second;
  return PRIZE_FOR_COUNT[correctCount];
};

const LOTTO_BUSINESS_RULES = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  length: 6,
  stock: 1000,
});

export {
  PRIZE,
  PRIZE_CONDITION,
  PROFIT_FOR_PRIZE,
  getPrizeFromCorrectCount,
  LOTTO_PRICE,
  LOTTO_BUSINESS_RULES,
};
