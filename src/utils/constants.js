const NUMBER = {
  DIVISOR: 1000,
  MIN: 1,
  MAX: 45,
  COUNT: 6,
  PERCENTAGE: 100,
};

const RESULT = {
  THREE: {
    matches: 3,
    prize: 5000,
    message: "3개 일치 (5,000원)",
  },
  FOUR: {
    matches: 4,
    prize: 50000,
    message: "4개 일치 (50,000원)",
  },
  FIVE: {
    matches: 5,
    prize: 1500000,
    message: "5개 일치 (1,500,000원)",
  },
  FIVE_BONUS: {
    matches: 5,
    prize: 30000000,
    message: "5개 일치, 보너스 볼 일치 (30,000,000원)",
  },
  SIX: {
    matches: 6,
    prize: 2000000000,
    message: "6개 일치 (2,000,000,000원)",
  },
};

export { NUMBER, RESULT };
