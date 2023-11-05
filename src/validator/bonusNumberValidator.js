import commonValidator from './commonValidator.js';

const bonusNumberValidator = {
  checkBonusNumber({ bonusNumber, winnigNumbers }) {
    commonValidator.checkNumberType(bonusNumber);
    commonValidator.checkLottoNumberRange(bonusNumber);
  },
};

export default bonusNumberValidator;
