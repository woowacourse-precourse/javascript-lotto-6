export const MAGIC_NUMBER = Object.freeze({
  LOTTO_NUMBER_LENGTH: 6,
  TICKET_PRICE: 1000,
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
});

export const PRIZE_MONEY = Object.freeze({
  FIRST_RANK: 2000000000,
  SECOND_RANK: 30000000,
  THIRD_RANK: 1500000,
  FOURTH_RANK: 50000,
  FIFTH_RANK: 5000,
});

export const RANK = Object.freeze({
  6: 'FIRST_RANK',
  '5 + 1': 'SECOND_RANK',
  5: 'THIRD_RANK',
  4: 'FOURTH_RANK',
  3: 'FIFTH_RANK',
});
