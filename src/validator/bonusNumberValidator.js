import commonValidator from './commonValidator.js';

const BONUS_NUMBER_PRIFIX_MESSAGE = '보너스 번호는';

const bonusNumberValidator = {
  checkDuplicate(bonusNumber, winningNumbers) {
    const splitedNumbers = winningNumbers.split(',');
    const mixNumbers = [...splitedNumbers, bonusNumber];
    commonValidator.checkDuplicate(BONUS_NUMBER_PRIFIX_MESSAGE, mixNumbers);
  },

  checkBonusNumber({ bonusNumber, winningNumbers }) {
    commonValidator.checkNumberType(BONUS_NUMBER_PRIFIX_MESSAGE, bonusNumber);
    commonValidator.checkLottoNumberRange(BONUS_NUMBER_PRIFIX_MESSAGE, bonusNumber);
    bonusNumberValidator.checkDuplicate(bonusNumber, winningNumbers);
  },
};

export default bonusNumberValidator;
