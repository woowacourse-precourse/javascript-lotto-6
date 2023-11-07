import commonValidator from './commonValidator.js';

const winnigNumberValidator = {
  numberOfLottoLitmit(splitedWinnigNumbers) {
    if (splitedWinnigNumbers.length !== 6) {
      throw new Error('[ERROR] 쉼표(,)를 기준으로 6자리를 입력해주세요');
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
