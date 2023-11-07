import { Console } from "@woowacourse/mission-utils";
import { lottoCount } from "./constants/constants";
import { errorMessage } from "./constants/messages";
import Validation from "./validations/Validation";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }
  
  #validate(numbers) {
    if (Validation.checkLength(numbers)) {
      throw new Error(errorMessage.INVALID_LENGTH);
    }
    if (Validation.checkLottoNumber(numbers)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (Validation.checkDuplicates(numbers)) {
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
    if (Validation.checkBonusNumber(number)) {
      throw new Error(errorMessage.INVALID_RANGE);
    }
    if (Validation.checkBonusDuplicates(this.#numbers, number)) {
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