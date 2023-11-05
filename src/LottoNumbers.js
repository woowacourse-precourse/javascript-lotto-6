import { ERROR, LOTTO } from './constant/index.js';

class LottoNumbers {
  constructor(numbers) {
    this.#validate(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.NUMBERS.LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.LENGTH);
    }

    const isInvalidRange = numbers.some(
      number => number < LOTTO.NUMBERS.MIN || number > LOTTO.NUMBERS.MAX
    );
    if (isInvalidRange) {
      throw new Error(ERROR.LOTTO_NUMBERS.RANGE);
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== LOTTO.NUMBERS.LENGTH) {
      throw new Error(ERROR.LOTTO_NUMBERS.UNIQE);
    }
  }
}

export default LottoNumbers;
