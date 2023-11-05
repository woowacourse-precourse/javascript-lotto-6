import { Console } from "@woowacourse/mission-utils";
import {
  checkLength,
  checkDuplicates,
  checkLottoNumber,
} from "./validators/lottoNumberValidator.js";
import {
  checkBonusNumber,
  checkBonusDuplicates,
} from "./validators/bonusNumberValidator.js";
import { errorMessage } from "./constants/messages.js";

class Lotto {
  #numbers;
  bonus;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (checkLength(numbers)) {
      throw new Error(errorMessage.INVALID_LENGTH);
    }
    if (checkLottoNumber(numbers)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (checkDuplicates(numbers)) {
      throw new Error(errorMessage.HAS_DUPLICATES);
    }
  }

  getBonus(number) {
    this.#validateBonus(number);
    this.bonus = number;
  }

  #validateBonus(number) {
    if (checkBonusNumber(number)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (checkBonusDuplicates(this.#numbers, number)) {
      throw new Error(errorMessage.BONUS_DUPLICATES);
    }
  }

  printLottoNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

export default Lotto;
