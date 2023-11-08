import Validate from './utils/ValidateUtils.js';
import { LIMITS } from './constants/fixedValue.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#checkForDuplicates(numbers);
    this.#validateInRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(`[ERROR] 로또 번호는 ${LIMITS.count}개여야 합니다.`);
    }
  }

  #validateInRange(numbers) {
    const resultCheckRange = numbers.every((number) => number <= 45);

    Validate.falseAndError(
      resultCheckRange,
      `[ERROR] 로또 번호는 ${LIMITS.minRange}부터 ${LIMITS.maxRange}사이의 숫자여야 합니다.`,
    );
  }

  #checkForDuplicates(numbers) {
    const resultDuplicate = Validate.hasDuplicates(numbers);

    Validate.falseAndError(resultDuplicate, '[ERROR] 중복된 숫자가 있습니다.');
  }

  getLottoNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
