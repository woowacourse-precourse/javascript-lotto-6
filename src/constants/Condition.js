export const USER_MONEY_CONDITION = 0;

export const LOTTO_PURCHASE_UNIT = 1000;

export const LOTTO_NUMBER = {
  min: 1,
  max: 45,
  length: 6,
  seperator: ',',
};

const first_prize = {
  rank: '1',
  match: '6',
  reward: 2000000000,
};

const second_prize = {
  rank: '2',
  match: '5',
  reward: 30000000,
};

const third_prize = {
  rank: '3',
  match: '5',
  reward: 1500000,
};

const fourth_prize = {
  rank: '4',
  match: '4',
  reward: 50000,
};

const fifth_prize = {
  rank: '5',
  match: '3',
  reward: 5000,
};

const no_prize = {
  rank: '0',
  match: '0',
  reward: 0,
};

export const PRIZE = [no_prize, first_prize, second_prize, third_prize, fourth_prize, fifth_prize];

export const TOTAL_RETURN = {
  multiplier: 1000,
  divider: 10,
};
