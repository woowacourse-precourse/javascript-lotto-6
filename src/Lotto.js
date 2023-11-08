import { print } from "./util/output.js";
import { validateNumbers } from "./validation/number.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.printLottos(numbers);
  }

  #validate(numbers) {
    validateNumbers(numbers);
    this.#numbers = numbers.map(Number);
  }

  printLottos() {
    print(`[${this.#numbers.sort((a, b) => a - b).join(", ")}]`);
  }

  getPrizeCount(userNumbers, bonusNumber) {
    let count = 0;
    let isbonus = false;
    userNumbers.forEach((userNumber) => {
      if (this.#numbers.includes(userNumber)) count++;
    });

    if (count === 5 && this.#numbers.includes(bonusNumber)) isbonus = true;

    return {
      count,
      isbonus,
    };
  }
}

export default Lotto;
