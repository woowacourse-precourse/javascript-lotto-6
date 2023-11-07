import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../utils/message";
import LOTTO_CONSTANT from "../utils/constant";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.numberCount) {
      throw new Error(ERROR_MESSAGES.lottoNumberCountSix);
    }
    if (new Set(numbers).size !== LOTTO_CONSTANT.numberCount) {
      throw new Error(ERROR_MESSAGES.duplicateLottoNumbers);
    }
    if (numbers.some((num) => Number.isNaN(num))) {
      throw new Error(ERROR_MESSAGES.lottoNumberNotNumber);
    }
    if (numbers.some((num) => num < LOTTO_CONSTANT.minNumber || num > LOTTO_CONSTANT.maxNumber)) {
      throw new Error(ERROR_MESSAGES.lottoNumberOutOfRange);
    }
  }
}

export default Lotto;
