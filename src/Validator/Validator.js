import {
  ERROR_MEESAGE,
  LOTTIO_SIZE,
  MONEY_UNIT,
  RANGE_END_NUM,
  RANGE_START_NUM,
} from '../Constant/Constant.js';
import Converter from '../Converter/Converter.js';

import CustomError from '../CustomError/CustonError.js';
import SizeMeasurer from '../Measurer/SizeMeasurer.js';

const Validator = class {
  static checkPurchaseAmount(money) {
    Validator.checkIsNaN(money);
    Validator.checkPositiveInt(money);
    Validator.checkMoneyUnit(money);
  }

  static checkLottoNums(lottoArr) {
    lottoArr.forEach((lotto) => {
      Validator.checkNumRange(lotto);
      Validator.checkIsNaN(lotto);
    });
    Validator.checkDuplicate(lottoArr);
    Validator.checkLength(lottoArr);
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
    if (Number.isNaN(+number)) {
      throw new CustomError(ERROR_MEESAGE.ISNAN_ERROR_MSG);
    }
    return true;
  }

  static checkNumRange(number) {
    if (+number < RANGE_START_NUM || +number > RANGE_END_NUM) {
      throw new CustomError(ERROR_MEESAGE.RANGE_ERROR_MSG);
    }
    return true;
  }

  static checkLength(arr) {
    if (SizeMeasurer.getArrSize(arr) !== LOTTIO_SIZE) {
      throw new CustomError(ERROR_MEESAGE.NOT_VALID_SIZE);
    }
    return true;
  }

  static checkDuplicate(arr) {
    // prettier-ignore
    if (
      SizeMeasurer.getArrSize(Converter.arrToSetStructure(arr))
      !== SizeMeasurer.getSetStructureSize(arr)
    ) {
      throw new CustomError(ERROR_MEESAGE.NOT_DUPLICATE);
    }
    return true;
  }
};

export default Validator;
