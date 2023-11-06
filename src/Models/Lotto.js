import LottoError from "../Error/LottoError.js";
import { LOTTO_SETTINGS } from "../config/gameSetting.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    const convertedNumbers = numbers.map(Number);
    this.#validateSize(convertedNumbers);
    this.#validateDuplicate(convertedNumbers);
    this.#validateRange(convertedNumbers);
    this.#numbers = this.#sortNumbers(convertedNumbers);
  }

  #validateSize(numbers) {
    if (numbers.length !== LOTTO_SETTINGS.NUMBERS_PER_TICKET) {
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBERS_PER_TICKET}개여야 합니다.`
      );
    }
  }

  #sortNumbers(numbers) {
    return numbers.sort(
      (currentNumber, nextNumber) => currentNumber - nextNumber
    );
  }

  #validateDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) {
      throw new LottoError(`중복된 번호가 있습니다.`);
    }
  }

  #validateRange(numbers) {
    const isAnyNumberInvalid = numbers.some(
      (number) =>
        number < LOTTO_SETTINGS.NUMBER_RANGE.MIN ||
        number > LOTTO_SETTINGS.NUMBER_RANGE.MAX
    );

    if (isAnyNumberInvalid) {
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBER_RANGE.MIN}이상 ${LOTTO_SETTINGS.NUMBER_RANGE.MAX}이하여야 합니다.`
      );
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
