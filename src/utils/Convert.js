import { INPUT_SEPARATOR } from '../constants/Message';

const Convert = {
  convertToNumber(numberString) {
    return Number(numberString);
  },

  convertToList(numbersString) {
    return numbersString.split(INPUT_SEPARATOR).map(numberString => Number(numberString.trim()));
  },
};

export default Convert;
