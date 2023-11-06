import ERROR from '../constant/Error.js';
import LOTTO from '../constant/Lotto.js';
import MoneyError from '../error/MoneyError.js';
import InputValidator from './InputValidator.js';

const isInvalidMoneyPrice = (money) => {
  return money % LOTTO.price !== 0;
};

const validateMoney = (money) => {
  if (InputValidator.isNan(money)) throw new MoneyError(ERROR.isNan);
  if (isInvalidMoneyPrice(money)) throw new MoneyError(ERROR.price);
};

export default validateMoney;
