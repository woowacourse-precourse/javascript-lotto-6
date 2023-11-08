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

  static CompareResult(numbers, winningNumbers, bonusNumber) {
    const sameNumberCount = numbers.length + winningNumbers.length - new Set([...numbers, ...winningNumbers]).size;

    if (sameNumberCount === 5 && numbers.includes((number) => number === bonusNumber)) {
      return LOTTO.MATCHES_5_BONUS_KEY;
    }
    switch (sameNumberCount) {
      case 3:
        return LOTTO.MATCHES_3_KEY;
      case 4:
        return LOTTO.MATCHES_4_KEY;
      case 5:
        return LOTTO.MATCHES_5_KEY;
      case 6:
        return LOTTO.MATCHES_6_KEY;
    }
    return LOTTO.FAILED_LOTTO_KEY;
  }

  static addToResult(resultKey, result) {
    const value = result.get(resultKey);
    result.set(resultKey, value + 1);

    const price = result.get(LOTTO.TOTAL_PRICE_KEY);
    switch (resultKey) {
      case LOTTO.MATCHES_3_KEY:
        result.set(LOTTO.TOTAL_PRICE_KEY, price + LOTTO.MATCHES_3_PRICE);
        break;
      case LOTTO.MATCHES_4_KEY:
        result.set(LOTTO.TOTAL_PRICE_KEY, price + LOTTO.MATCHES_4_PRICE);
        break;
      case LOTTO.MATCHES_5_KEY:
        result.set(LOTTO.TOTAL_PRICE_KEY, price + LOTTO.MATCHES_5_PRICE);
        break;
      case LOTTO.MATCHES_5_BONUS_KEY:
        result.set(LOTTO.TOTAL_PRICE_KEY, price + LOTTO.MATCHES_5_BONUS_PRICE);
        break;
      case LOTTO.MATCHES_6_KEY:
        result.set(LOTTO.TOTAL_PRICE_KEY, price + LOTTO.MATCHES_6_PRICE);
        break;
    }
  }

  static calcTotalResult(numbersArray, winningNumbers, bonusNumber) {
    const result = new Map([
      [LOTTO.FAILED_LOTTO_KEY, 0],
      [LOTTO.MATCHES_3_KEY, 0],
      [LOTTO.MATCHES_4_KEY, 0],
      [LOTTO.MATCHES_5_KEY, 0],
      [LOTTO.MATCHES_5_BONUS_KEY, 0],
      [LOTTO.MATCHES_6_KEY, 0],
      [LOTTO.TOTAL_PRICE_KEY, 0],
    ]);

    for (let numbers of numbersArray) {
      const resultKey = Lotto.CompareResult(numbers, winningNumbers, bonusNumber);
      Lotto.addToResult(resultKey, result);
    }
    return result;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
