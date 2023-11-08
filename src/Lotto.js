import LottoError from "./LottoError.js";
import { commonValidation, lottoValidation } from "./validator/index.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  static createLotto(numbers) {
    return new this(numbers);
  }

  #validate(numbers) {
    this.#validateCommonWrapper(numbers,
      (number) => {
        Object.values(commonValidation).forEach(
          ({ errorMessage, isInvalid }) => {
            if (isInvalid(String(number)))
              throw LottoError.createLottoError(errorMessage);
          }
        )
      }
    );
    Object.values(lottoValidation).forEach(
      ({ errorMessage, isInvalid }) => {
        if (isInvalid(numbers))
          throw LottoError.createLottoError(errorMessage);
      }
    )
  }

  #validateCommonWrapper(numbers, callback) {
    numbers.forEach(number => {
      callback(number)
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
