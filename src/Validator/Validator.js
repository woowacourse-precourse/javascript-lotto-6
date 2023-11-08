import { ERROR_MEESAGE, MONEY_UNIT } from '../Constant/Constant.js';

import CustomError from '../CustomError/CustonError.js';

// 추후 테스트하기 좋게 변경하기

const Validator = class {
  static checkPurchaseAmount(money) {
    Validator.checkIsNaN(money);
    Validator.checkPositiveInt(money);
    Validator.checkMoneyUnit(money);
  }

  static checkMoneyUnit(money) {
    if (+money % MONEY_UNIT !== 0) {
      throw new CustomError(ERROR_MEESAGE.NOT_VALID_MONEY);
    }

    return true;
  }

  static checkPositiveInt(number) {
    if (Number.isInteger(+number) && +number < 0) {
      throw new CustomError(ERROR_MEESAGE.NOT_MINUS_NUMBER);
    }

    return true;
  }

  static checkIsNaN(number) {
    if (Number.isNaN(+number)) throw new CustomError(ERROR_MEESAGE.ISNAN_ERROR_MSG);
    return true;
  }
};

export default Validator;
