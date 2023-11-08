export const REWARD_INFOS = [
  { RANK: 5, MATCH_COUNT: 3, BONUS: false, REWARD: 5000 },
  { RANK: 4, MATCH_COUNT: 4, BONUS: false, REWARD: 50000 },
  { RANK: 3, MATCH_COUNT: 5, BONUS: false, REWARD: 1500000 },
  { RANK: 2, MATCH_COUNT: 5, BONUS: true, REWARD: 30000000 },
  { RANK: 1, MATCH_COUNT: 6, BONUS: false, REWARD: 2000000000 },
];

export const LOTTO_PRIZE = 1000;

export const NUMBERS_REGEX = /^\d+$/;

export const LOTTO_NUMBERS_REGEX =
  /^([1-9]|[1-3][0-9]|4[0-5])(,([1-9]|[1-3][0-9]|4[0-5])){5}$/;

export const LOTTO_BONUS_NUMBER_REGEX = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;