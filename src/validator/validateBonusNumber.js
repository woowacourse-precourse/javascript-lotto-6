import ERROR from '../constant/Error.js';
import BonusNumberError from '../error/BonusNumberError.js';

const validateBonusNumber = (lotto, bonusNumber) => {
  if (lotto.includes(bonusNumber))
    throw new BonusNumberError(ERROR.bonusNumber);
};

export default validateBonusNumber;
