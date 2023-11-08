import { LOTTO_NUMBER_COUNT } from "./constant/LottoInfo.js";
import { ERROR_MESSAGE } from "./constant/Error.js";
import ValidateInputNumber from "./validator/ValidateInputNumber.js";
class Lotto {
  // # prefix를 변경할 수 없다.
  // 필드를 추가할 수 없다.
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    this.#validateCount(numbers);
    this.#validateNumber(numbers);
    this.#validateDuplication(numbers);
  }
  #validateCount(numbers) {
    if (numbers.length !== LOTTO_NUMBER_COUNT) {
      throw new Error(ERROR_MESSAGE.outCountLottoNumbers);
    }
  }
  #validateDuplication(numbers) {
    const lottoSet = new Set(numbers);
    if (numbers.length !== lottoSet.size) {
      throw new Error(ERROR_MESSAGE.lottoDuplication);
    }
  }
  #validateNumber(numbers) {
    numbers.forEach((number) => {
      ValidateInputNumber.checkString(number);
      ValidateInputNumber.checkNaturalNumber(number);
      ValidateInputNumber.checkLottoNumber(number);
    });
  }
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
