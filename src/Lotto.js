import { LOTTO } from "./constants/api";
import random from "./utils/random";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static generateNumbers() {
    const numbers = random.generateNumbers(
      LOTTO.MIN_NUMBER_IN_RANGE,
      LOTTO.MAX_NUMBER_IN_RANGE,
      LOTTO.NUMBER_CHOICES_PER_TICKET
    );

    return numbers;
  }

  static getHowManyLottoCanBuy(purchaseAmount) {
    const result = purchaseAmount / LOTTO.PRICE;

    return result;
  }
}

export default Lotto;
