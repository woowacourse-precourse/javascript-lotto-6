export const PURCHASE_UNIT = 1_000;

export const PRIZE = Object.freeze({
  FIRST: '1등',
  SECOND: '2등',
  THIRD: '3등',
  FOURTH: '4등',
  FIFTH: '5등',
});

export const PRIZE_MONEY = Object.freeze({
  [PRIZE.FIRST]: 2_000_000_000,
  [PRIZE.SECOND]: 30_000_000,
  [PRIZE.THIRD]: 1_500_000,
  [PRIZE.FOURTH]: 50_000,
  [PRIZE.FIFTH]: 5_000,
});
