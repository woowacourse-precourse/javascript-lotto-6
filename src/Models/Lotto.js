import LottoError from "../Error/LottoError.js";
import LOTTO_SETTINGS from "../config/gameSetting.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateSize(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = this.#sortNumbers(numbers);
  }

  #validateSize(numbers) {
    if (numbers.length !== 6) {
      throw new LottoError(
        `로또 번호는 ${LOTTO_SETTINGS.NUMBER_PER_TICKET}개여야 합니다.`
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

  getNumbers() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
