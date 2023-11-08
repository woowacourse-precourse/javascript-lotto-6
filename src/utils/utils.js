import { COMMON } from '../constants/common.js';

export const utils = {
  ascendingNumbers: (arr) => {
    return arr.sort((prevNumber, nextNumber) => prevNumber - nextNumber);
  },
  numberFormat: (str) => {
    return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  roundingSecondDecimalPlace: (num) => {
    return parseFloat(num.toFixed(COMMON.roundingSecondDigits));
  },
  separateNumbers: (arr) => {
    return arr.split(COMMON.comma).map((number) => parseInt(number));
  },
};
