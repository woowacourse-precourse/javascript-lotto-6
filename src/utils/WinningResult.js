import { RANK } from '../constant';

const getLength = (array, value) => array.filter((v) => v === value).length;

const getWinningResult = (array) => {
  return RANK.map((v) => ({
    rank: v,
    number: getLength(array, v),
  }));
};

export { getWinningResult };
