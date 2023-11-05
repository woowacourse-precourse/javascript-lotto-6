import commonValidator from './commonValidator';

const bonusNumberValidator = {
  checkBonusNumber(winnigNumbers) {
    commonValidator.checkNumberType(winnigNumbers);
  },
};

export default bonusNumberValidator;
