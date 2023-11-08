import { ERROR_MESSAGE } from "../constant/Error.js";
import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN } from "../constant/LottoInfo.js";
class ValidateInputNumber {
  static checkEmpty(str) {
    if (str === "" || str.indexOf(" ") >= 0) {
      throw new Error(ERROR_MESSAGE.inputEmpty);
    }
  }
  static checkString(num) {
    if (isNaN(num)) {
      throw new Error(ERROR_MESSAGE.inputString);
    }
  }

  static checkNaturalNumber(num) {
    if (num <= 0 || !Number.isInteger(num)) {
      throw new Error(ERROR_MESSAGE.inputNaturalNumber);
    }
  }

  static checkLottoNumber(num) {
    if (num < LOTTO_NUMBER_MIN || num > LOTTO_NUMBER_MAX) {
      throw new Error(ERROR_MESSAGE.outRangeLottoNumber);
    }
  }
}

export default ValidateInputNumber;
