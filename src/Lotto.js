import { LOTTO } from "./constants/lotto.js";
import { ERROR_MESSAGE } from "./constants/message.js";
import { Validator } from "./utils/validator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers.toString());
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numberArray = numbers.split(",").map(Number);

    if (!this.isLottoFormat(numberArray)) {
      throw new Error(ERROR_MESSAGE.FORMAT_ERROR);
    }
    if (!this.isLengthValid(numberArray)) {
      throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
    }
    if (this.isDuplicates(numberArray)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_ERROR);
    }
  }

  isLengthValid(numbers) {
    return numbers.length === LOTTO.LENGTH;
  }

  isDuplicates(numbers) {
    const numberSet = new Set(numbers);
    return numbers.length !== numberSet.size;
  }

  isLottoFormat(numbers) {
    return numbers.every(
      (number) =>
        Validator.isNumberInRange(number) && Validator.isNumber(number)
    );
  }
}

export default Lotto;
