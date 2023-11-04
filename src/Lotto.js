import LottoGameError from "./Error";
import { LOTTO_ERROR_MSG } from "./constants/error";
import { LOTTO_CONSTANT } from "./constants/game";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#sortedNumbers(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateLength(numbers);
    this.#validateDigit(numbers);
    this.#validateRange(numbers);
    this.#validateDuplication(numbers);
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

  #validateRange(numbers) {
    const abnormalRange = numbers.some(
      (number) =>
        number < LOTTO_CONSTANT.MIN_RANGE || number > LOTTO_CONSTANT.MAX_RANGE
    );

    if (abnormalRange) {
      throw new LottoGameError(LOTTO_ERROR_MSG.RANGE_ERR);
    }
  }

  #validateDigit(numbers) {
    const DIGIT_CHECK = /^[0-9]+$/;

    const isDigit = numbers.every((number) => DIGIT_CHECK.test(number));
    if (!isDigit) {
      throw new LottoGameError(LOTTO_ERROR_MSG.NOT_DIGIT_ERR);
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
