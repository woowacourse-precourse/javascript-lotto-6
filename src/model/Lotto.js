import LottoGameError from "../Error.js";
import { LOTTO_ERROR_MSG } from "../constants/error.js";
import { LOTTO_CONSTANT } from "../constants/game.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortedNumbers(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDuplication(numbers);
    numbers.forEach((number) => {
      this.validateRange(number);
    });
  }

  #validateLength(numbers) {
    if (numbers.length !== LOTTO_CONSTANT.SIZE) {
      throw new LottoGameError(LOTTO_ERROR_MSG.LENGTH_ERR);
    }
  }

  #validateDuplication(numbers) {
    numbers.forEach((number, idx) => {
      if (idx !== numbers.lastIndexOf(number)) {
        throw new LottoGameError(LOTTO_ERROR_MSG.DUPLICATION_ERR);
      }
    });
  }

  validateRange(num) {
    if (num < LOTTO_CONSTANT.RANGE.MIN || num > LOTTO_CONSTANT.RANGE.MAX) {
      throw new LottoGameError(LOTTO_ERROR_MSG.RANGE_ERR);
    }
  }

  // TODO: 추가 기능 구현
  #sortedNumbers(numbers) {
    numbers.sort((a, b) => a - b);
  }

  toString() {
    let lottoString = "[";

    lottoString = this.#numbers.reduce(
      (acc, number) => acc + `${number}, `,
      lottoString
    );
    lottoString = lottoString.slice(0, lottoString.length - 2);
    lottoString += "]";

    return lottoString;
  }

  get lottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
