import ERROR_CONSTANT from "../Constant/ErrorConstant.js";
import ValidationError from "../Error/ValidationError.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    if (!Array.isArray(numbers)) {
      throw new ValidationError(ERROR_CONSTANT.IS_NUT_ARRAY);
    }
    this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if ((new Set(numbers)).size !== numbers.length) {
      throw new ValidationError(ERROR_CONSTANT.DUPLICATE_VALUE_IN_ARRAY);
    }
    this.#numbers = numbers;
  }

  getLottoNumbers() {
    return (this.#numbers);
  }
}

export default Lotto;
