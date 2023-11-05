import commonValidator from './commonValidator.js';

const WINNINGNUMBER_PRIFIX_MESSAGE = '당첨 번호는';

const winnigNumberValidator = {
  numberOfLottoLitmit(splitedWinnigNumbers) {
    if (splitedWinnigNumbers.length !== 6) {
      throw new Error('당첨 번호는 쉼표(,)를 기준으로 6자리를 입력해주세요');
    }
  },

  checkNumberType(splitedWinnigNumbers) {
    splitedWinnigNumbers.forEach((number) =>
      commonValidator.checkNumberType(WINNINGNUMBER_PRIFIX_MESSAGE, number)
    );
  },

  checkLottoNumberRange(splitedWinnigNumbers) {
    splitedWinnigNumbers.forEach((number) =>
      commonValidator.checkLottoNumberRange(WINNINGNUMBER_PRIFIX_MESSAGE, number)
    );
  },

  checkDuplicate(splitedWinnigNumbers) {
    commonValidator.checkDuplicate(WINNINGNUMBER_PRIFIX_MESSAGE, splitedWinnigNumbers);
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
