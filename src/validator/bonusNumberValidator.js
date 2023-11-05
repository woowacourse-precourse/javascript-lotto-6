import commonValidator from './commonValidator.js';

const bonusNumberValidator = {
  checkBonusNumber(winnigNumbers) {
    commonValidator.checkNumberType(winnigNumbers);
    commonValidator.checkLottoNumberRange(winnigNumbers);
  },
};

export default bonusNumberValidator;
