import { Console } from "@woowacourse/mission-utils";
import { Validator } from "../ValidateInput.js";

class Lotto {
  constructor(numbers) {
    this.#validate(numbers);
    this.numbers = numbers;
  }

  #validate(numbers) {
    Validator.invalidLottoSize(numbers);
    Validator.invalidLottoRange(numbers);
    Validator.duplication(numbers);
  }

  print() {
    Console.print(`[${this.numbers.join(", ")}]`);
  }

  draw(winningNumber) {
    return this.numbers.filter((number) => winningNumber.includes(number))
      .length;
  }

  bonusDraw(bonusNumber) {
    return this.numbers.includes(bonusNumber);
  }
}

export default Lotto;
