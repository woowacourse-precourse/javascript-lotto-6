export const PurchaseRule = {
  UNIT: 1000,
};

export const LottoRule = {
  Price: 1000,
  Number: 6,
  BonusNumber: 1,
  MinNumber: 1,
  MaxNumber: 45,
};

export const LottoWinningCriteria = [
  {
    numberOfMatches: 3,
    prize: 5_000,
    allowBonus: false,
    count: 0,
  },
  {
    numberOfMatches: 4,
    prize: 50_000,
    allowBonus: false,
    count: 0,
  },
  {
    numberOfMatches: 5,
    prize: 1_500_000,
    allowBonus: false,
    count: 0,
  },
  {
    numberOfMatches: 5,
    prize: 30_000_000,
    allowBonus: true,
    count: 0,
  },
  {
    numberOfMatches: 6,
    prize: 2_000_000_000,
    allowBonus: false,
    count: 0,
  },
];
