import { Console } from '@woowacourse/mission-utils';
import { ERROR } from '../Constant/Constants';

const validate = {
  // 구입 금액 유효성 검사
  async moneyValidation(money) {
    Console.print(money);
    if (money === '') {
      throw new Error(ERROR.INPUT_EMPTY);
    } else if (isNaN(money) != false) {
      throw new Error(ERROR.INPUT_NOT_NUMBER);
    } else if (money % 1000 !== 0) {
      throw new Error(ERROR.INPUT_MONEY_UNIT);
    } else if (money <= 0) {
      throw new Error(ERROR.INPUT_ZERO_NUM);
    }
  },
  // 보너스 번호 유효성 검사
  async bonusValidation(numList, num) {
    if (num < 1 || num > 45) {
      throw new Error(ERROR.INPUT_RANGE_NUM);
    }
    if (numList.includes(num)) {
      throw new Error(ERROR.INPUT_DUPLICATE_BONUS_NUM);
    }
    if (num === '') {
      throw new Error(ERROR.INPUT_EMPTY);
    }
  },
};

export default validate;
