export const PURCHASE_AMOUNT = Object.freeze({
  divisor: 1_000,
  max: 100_000,
});

export const LOTTO = Object.freeze({
  delimiter: ',',
  numberRangeStart: 1,
  numberRangeEnd: 45,
  numberCount: 6,
  price: 1000,
  rank: Object.freeze({
    6: '1등',
    bonus: '2등',
    5: '3등',
    4: '4등',
    3: '5등',
    undefined: '꽝',
  }),
});

export const LOTTO_PROCESS = Object.freeze({
  bonus: 'bonus',
  winning: 'winning',
});
