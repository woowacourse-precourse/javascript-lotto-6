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

  draw(winning) {
    return this.#numbers.filter((number) => winning.includes(number)).length;
  }

  bonusDraw(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }
}

export default Lotto;
