import { REWARD } from './Constants.js';

export const Place = {
  '1st': 0,
  '2nd': 0,
  '3rd': 0,
  '4th': 0,
  '5th': 0,
  profit: null
};

export const calculateReward = () => {
  const reward =
    Place['1st'] * REWARD.FIRST +
    Place['2nd'] * REWARD.SECOND +
    Place['3rd'] * REWARD.THIRD +
    Place['4th'] * REWARD.FOURTH +
    Place['5th'] * REWARD.FIFTH;
  return reward;
};
