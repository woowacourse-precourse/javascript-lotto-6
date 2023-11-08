import LottoValidation from "./LottoValidation.js";

export const LOTTO_PRICE = 1000;
export const LOTTO_NUMBER_RANGE = Object.freeze({
  MIN: 1,
  MAX: 45,
});
export const LOTTO_NUMBER_COUNT = 6;

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoValidation.validate(numbers);

    this.#numbers = numbers;
    this.#numbers.sort((x, y) => x - y);
  }

  get numbers() {
    return this.#numbers;
  }

  static calculateQuantityFromPrice(price) {
    return price / LOTTO_PRICE;
  }
}

export default Lotto;
