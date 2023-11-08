import { Random } from '@woowacourse/mission-utils';

export const generateRandomNumbers = (min, max, number) => {
  return Random.pickUniqueNumbersInRange(min, max, number);
};

export const converttNumberWithCommas = (number) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return number.toString().replace(regex, ',');
};
