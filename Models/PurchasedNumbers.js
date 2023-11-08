import { RANDOM_NUMBER_RANGE } from '../modules/constant';
import createRandomNumbers from '../utils/RandomNumber';

class PurchasedNumbers {
  #numbers;

  constructor(amount) {
    this.createPurchasedNumbers(amount);
  }

  createPurchasedNumbers(amount) {
    this.#numbers = Array.from({ length: amount }, () =>
      createRandomNumbers(
        RANDOM_NUMBER_RANGE.min,
        RANDOM_NUMBER_RANGE.max,
        RANDOM_NUMBER_RANGE.length
      )
    );
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default PurchasedNumbers;
