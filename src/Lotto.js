import { LOTTO } from './constants/api';
import { ERROR_MESSAGE } from './constants/message';
import random from './utils/random';
import validator from './utils/validator';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== LOTTO.CHOICE_NUMBERS_PER_TICKET) {
      throw new Error(ERROR_MESSAGE.CHOICE_NUMBER_WRONG_COUNT);
    }

    if (!validator.isPositiveIntegerArray(numbers)) {
      throw new Error(ERROR_MESSAGE.ONLY_NUMBER_OR_COMMA);
    }

    if (validator.isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NUMBER);
    }

    if (!validator.isNumberInRangeArray(LOTTO.MIN_NUMBER_IN_RANGE, LOTTO.MAX_NUMBER_IN_RANGE, numbers)) {
      throw new Error(ERROR_MESSAGE.OUT_OF_RANGE(LOTTO.MIN_NUMBER_IN_RANGE, LOTTO.MAX_NUMBER_IN_RANGE));
    }
  }

  static generateNumbers() {
    const numbers = random.getNumbersInRange(
      LOTTO.MIN_NUMBER_IN_RANGE,
      LOTTO.MAX_NUMBER_IN_RANGE,
      LOTTO.CHOICE_NUMBERS_PER_TICKET
    );

    return numbers;
  }

  static getHowManyLottoCanBuy(purchaseAmount) {
    const result = purchaseAmount / LOTTO.PRICE;

    return result;
  }
}

export default Lotto;
