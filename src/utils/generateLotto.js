import Lotto from '../Lotto.js';
import CONSTANTS from '../constants/constants.js';
import generateRandomNumber from './generateRandomNumber.js';

const generateLotto = () => {
  const randomNumber = generateRandomNumber(
    CONSTANTS.number.min,
    CONSTANTS.number.max,
    CONSTANTS.number.winningNumbersCount,
  );

  return new Lotto(randomNumber);
};

export default generateLotto;
