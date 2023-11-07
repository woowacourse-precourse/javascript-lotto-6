import { Console } from "@woowacourse/mission-utils";
import { lottoCount } from "./constants/constants.js";
import { errorMessage } from "./constants/messages.js";

import Validator from "./validators/Validator.js";

class Lotto {
  #numbers;
  bonus

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  
  #validate(numbers) {
    if (Validator.checkLength(numbers)) {
      throw new Error(errorMessage.INVALID_LENGTH);
    }
    if (Validator.checkLottoNumber(numbers)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (Validator.checkDuplicates(numbers)) {
      throw new Error(errorMessage.HAS_DUPLICATES);
    }
  }

  printLottoNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getBonus(number) {
    this.#validateBonus(number);
    this.bonus = number;
  }
  
  #validateBonus(number) {
    if (Validator.checkBonusNumber(number)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (Validator.checkBonusDuplicates(this.#numbers, number)) {
      throw new Error(errorMessage.BONUS_DUPLICATES);
    }
  }

  compareLotto(winningLotto) {
    const compareCount = this.#numbers.filter((number) =>
      winningLotto.#numbers.includes(number)
    );
    if (
      compareCount.length === lottoCount.THIRD &&
      this.#numbers.includes(winningLotto.bonus)
    ) {
      return lottoCount.SECOND;
    }
    return compareCount.length;
  }
}


export default Lotto;