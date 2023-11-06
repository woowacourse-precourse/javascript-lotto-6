import { ERORR_MESSAGE } from "./constants/message.js";
import { Validator } from "./utils/validator.js";

class Lotto {
  numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.numbers = numbers.split(",").map(Number);
  }

  #validate(numbers) {
    const numberArray = numbers.split(",");
    if (!this.isLengthValid(numberArray)) {
      throw new Error(ERORR_MESSAGE.lengthError);
    }
    if (this.isDuplicates(numberArray)) {
      throw new Error(ERORR_MESSAGE.duplicateError);
    }
    if (!this.isLottoFormat(numberArray)) {
      throw new Error(ERORR_MESSAGE.formatError);
    }
  }

  isLengthValid(numbers) {
    return (
      numbers.length === 6 &&
      numbers.every((number) => Validator.isNumber(number))
    );
  }

  isDuplicates(numbers) {
    const numberSet = new Set(numbers);
    return numbers.length !== numberSet.size;
  }

  isLottoFormat(numbers) {
    return numbers.every((number) => number >= 1 && number <= 45);
  }
}

export default Lotto;
