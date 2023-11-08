import { Console } from "@woowacourse/mission-utils";

import { ERROR_MESSAGE } from "../constants/error.js";
import { LOTTO } from "../constants/constants.js";

class LottoValidator {
  static isLengthSix(numbers) {
    const isLengthSix = numbers.length === LOTTO.length;
    if (!isLengthSix) {
      Console.print(ERROR_MESSAGE.notSixLength);
      return false;
    }
    return true;
  }

  static isRepeat(numbers) {
    const isRepeat = new Set(numbers).size !== numbers.length;
    if (isRepeat) {
      Console.print(ERROR_MESSAGE.isRepeat);
      return false;
    }
    return true;
  }

  static isValidLottoNumber(number) {
    const isValidLotto = number >= LOTTO.min && number <= LOTTO.max;
    if (!isValidLotto) {
      Console.print(ERROR_MESSAGE.notValidLotto);
      return false;
    }
    return true;
  }
}

export default LottoValidator;