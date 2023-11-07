import { OutputView } from '../views/OutputView.js';
import { EXCEPTION } from './Constant.js';

export const Validator = {
  checkMoney(price) {
    const strPrice = String(price);
    if (!/^[0-9]+$/g.test(strPrice) || price % 1000 !== 0) {
      OutputView.err(EXCEPTION.money);
      return false;
    }
    return true;
  },
  checkSixNumber(numbers) {
    if (numbers.length !== 6) {
      OutputView.err(EXCEPTION.sixNumber);
      return false;
    }
    return true;
  },
  checkIsNumber(number) {
    const strNumber = String(number);
    if (!/^([1-9]|[1-3][0-9]|4[0-5])$/.test(strNumber)) {
      OutputView.err(EXCEPTION.isNumber);
      return false;
    }
    return true;
  },
}