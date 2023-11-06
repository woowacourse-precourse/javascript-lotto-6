import { RANK } from '../constant';

const getLength = (array, value) => array.filter((v) => v === value).length;

/**
 *
 * @param {string[]} array :  에시 ) ["three", "three","four"]
 * @returns
 */
const getWinningResult = (array) => {
  return RANK.map((v) => ({
    rank: v,
    number: getLength(array, v),
  }));
};

export { getWinningResult };
