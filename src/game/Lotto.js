import lottoRanking from "./lottoRanking";
import { Random } from "@woowacourse/mission-utils";
import { ERROR, CONSTANTS } from "../output/constants";

class Lotto {
  #numbers;

  constructor() {
    const numbers = this.#setLottoNumbers();
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== CONSTANTS.LOTTO_NUMBER_LENGTH) {
      throw new Error(`${ERROR.LOTTO_NUMBERS_INVALID_LENGTH}`);
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error(`${ERROR.LOTTO_NUMBERS_DUPLICATED}`);
    }
  }

  #setLottoNumbers() {
    const randomNumbers = Random.pickUniqueNumbersInRange(
      CONSTANTS.MIN_LOTTO_NUMBER,
      CONSTANTS.MAX_LOTTO_NUMBER,
      CONSTANTS.LOTTO_NUMBER_LENGTH
    );
    return randomNumbers;
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
