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
    const moneyIsNumber = checkIsNumber(money);
    if (!moneyIsNumber) throw new Error('[ERROR] 숫자를 입력해주세요.');

    const moneyIsInThousands = checkCanDevideByThousand(money);
    if (!moneyIsInThousands)
      throw new Error('[ERROR] 천원단위로 입력해주세요.');

    return true;
  },

  checkLottoNumberIsValid(lottoNumber) {
    if (lottoNumber.length !== 6) throw new Error('[ERROR]');

    const lottoNumberIsNumber = lottoNumber.filter(
      (number) => !checkIsNumber(number)
    );

    if (lottoNumberIsNumber.length !== 0) throw new Error('[ERROR]');

    const lottoNumbersIncludedZero = checkIncludedZero(lottoNumber);
    if (lottoNumbersIncludedZero) throw new Error('[ERROR]');

    const lottoNumberIsDuplicated = checkIsDuplicated(lottoNumber);
    if (lottoNumberIsDuplicated) throw new Error('[ERROR]');

    return true;
  },

  checkBonusNumberIsValid(bonusNumber) {
    const bonusNumberIsNumber = checkIsNumber(bonusNumber);
    if (!bonusNumberIsNumber) throw new Error('[ERROR] 숫자를 입력해주세요.');

    const bonusNumberIsInRange = checkIsInRange(bonusNumber, 45, 1);
    if (!bonusNumberIsInRange)
      throw new Error('[ERROR]1 ~ 45 범위의 숫자를 입력해 주세요.');

    return true;
  },
};

export default Validator;
