import { LOTTO_NUMBER } from '../constants/constant.js';
import { ERROR_MESSAGE } from '../constants/message.js';
import commonValidator from './commonValidator.js';

const winnigNumberValidator = {
  numberOfLottoLitmit(splitedWinnigNumbers) {
    if (splitedWinnigNumbers.length !== LOTTO_NUMBER.LENGTH) {
      throw new Error(ERROR_MESSAGE.NUMBER_OF_LOTTO_LIMIT);
    }
  },

  checkNumberType(splitedWinnigNumbers) {
    splitedWinnigNumbers.forEach((number) => commonValidator.checkNumberType(number));
  },

  checkLottoNumberRange(splitedWinnigNumbers) {
    splitedWinnigNumbers.forEach((number) => commonValidator.checkLottoNumberRange(number));
  },

  checkDuplicate(splitedWinnigNumbers) {
    commonValidator.checkDuplicate(splitedWinnigNumbers);
  },

  checkWinningNumbers(winnigNumbers) {
    const splitedWinnigNumbers = winnigNumbers.split(',');
    winnigNumberValidator.numberOfLottoLitmit(splitedWinnigNumbers);
    winnigNumberValidator.checkNumberType(splitedWinnigNumbers);
    winnigNumberValidator.checkLottoNumberRange(splitedWinnigNumbers);
    winnigNumberValidator.checkDuplicate(splitedWinnigNumbers);
  },
};

export default winnigNumberValidator;
