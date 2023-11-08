export const USER_MONEY_CONDITION = 0;

export const LOTTO_PURCHASE_UNIT = 1000;

export const LOTTO_NUMBER = {
  min: 1,
  max: 45,
  length: 6,
  seperator: ',',
};

const FIRST_PRIZE = {
  rank: '1',
  match: '6',
  reward: 2000000000,
};

const SECOND_PRIZE = {
  rank: '2',
  match: '5',
  reward: 30000000,
};

const THIRD_PRIZE = {
  rank: '3',
  match: '5',
  reward: 1500000,
};

const FOURTH_PRIZE = {
  rank: '4',
  match: '4',
  reward: 50000,
};

const FIFTH_PRIZE = {
  rank: '5',
  match: '3',
  reward: 5000,
};

const NO_PRIZE = {
  rank: '0',
  match: '0',
  reward: 0,
};

export const PRIZE = [NO_PRIZE, FIRST_PRIZE, SECOND_PRIZE, THIRD_PRIZE, FOURTH_PRIZE, FIFTH_PRIZE];

export const TOTAL_RETURN = {
  multiplier: 1000,
  divider: 10,
};
