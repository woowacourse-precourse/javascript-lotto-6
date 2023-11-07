import { Console } from "@woowacourse/mission-utils";
import { Validator } from "../ValidateInput.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validator.invalidLottoSize(numbers);
    Validator.invalidLottoRange(numbers);
    Validator.duplication(numbers);
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
}

export default Lotto;
