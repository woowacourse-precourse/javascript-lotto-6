import commonValidator from './commonValidator.js';

const bonusNumberValidator = {
  checkDuplicate(bonusNumber, winningNumbers) {
    const splitedNumbers = winningNumbers.split(',');
    const mixNumbers = [...splitedNumbers, bonusNumber];
    commonValidator.checkDuplicate(mixNumbers);
  },

  checkBonusNumber({ bonusNumber, winningNumbers }) {
    commonValidator.checkNumberType(bonusNumber);
    commonValidator.checkLottoNumberRange(bonusNumber);
    bonusNumberValidator.checkDuplicate(bonusNumber, winningNumbers);
  },
};

export default bonusNumberValidator;
