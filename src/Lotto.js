import { Console, Random } from "@woowacourse/mission-utils";
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

  printNumbers() {
    const SEPERATOR = ", ";
    Console.print(`[${this.#numbers.join(SEPERATOR)}]`);
  }

  static calculateQuantityFromPrice(price) {
    return price / LOTTO_PRICE;
  }

  static #generateLotto() {
    const lottoNumbers = Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER_RANGE.MIN,
      LOTTO_NUMBER_RANGE.MAX,
      LOTTO_NUMBER_COUNT
    );

    return new Lotto(lottoNumbers);
  }

  static generateLottos(quantity) {
    const result = [];

    Array.from({ length: quantity }, () => {
      result.push(this.#generateLotto());
    });

    return result;
  }
}

export default Lotto;
