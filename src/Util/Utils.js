import { Random } from '@woowacourse/mission-utils';
import { LAST_DECIMAL_PLACE_TO_DISPLAY } from '../Constant/Constants.js';

export const generateRandomNumbers = (min, max, number) => {
  return Random.pickUniqueNumbersInRange(min, max, number);
};

export const getRateOfReturnOutPutFormat = (number) => {
  return converttNumberWithCommas(
    roundOffNumber(number, LAST_DECIMAL_PLACE_TO_DISPLAY)
  );
};

const converttNumberWithCommas = (input) => {
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return input.toString().replace(regex, ',');
};

const roundOffNumber = (number, lastDecimal) => {
  return number.toFixed(lastDecimal);
};
