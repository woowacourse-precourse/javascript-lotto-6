import ValidationUtils from '../../utils/ValidationUtils.js';

const {
  checkCanDevideByThousand,
  checkIsNumber,
  checkIncludedZero,
  checkIsDuplicated,
  checkIsInRange,
} = ValidationUtils;

const Validator = {
  checkInsertedMoneyIsValid(money) {
    const moneyIsInThousands = checkCanDevideByThousand(money);
    if (!moneyIsInThousands) throw new Error('[ERROR]');

    const moneyIsNumber = checkIsNumber(money);
    if (!moneyIsNumber) throw new Error('[ERROR]');

    return true;
  },

  checkWinNumberIsValid(winNumber) {
    if (winNumber.length !== 6) throw new Error('[ERROR]');

    const winNumberIsNumber = winNumber.filter(
      (number) => !checkIsNumber(number)
    );

    if (winNumberIsNumber.length !== 0) throw new Error('[ERROR]');

    const winNumberIncludedZero = checkIncludedZero(winNumber);
    if (winNumberIncludedZero) throw new Error('[ERROR]');

    const winNumberIsDuplicated = checkIsDuplicated(winNumber);
    if (winNumberIsDuplicated) throw new Error('[ERROR]');

    return true;
  },

  checkBonusNumberIsValid(bonusNumber) {
    const bonusNumberIsNumber = checkIsNumber(bonusNumber);
    if (!bonusNumberIsNumber) throw new Error('[ERROR]');

    const bonusNumberIsInRange = checkIsInRange(bonusNumber, 45, 1);
    if (!bonusNumberIsInRange) throw new Error('[ERROR]');

    return true;
  },
};

export default Validator;
