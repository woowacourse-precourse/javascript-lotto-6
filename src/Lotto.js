import { LottoTicketValidator } from "./LottoTicketValidator.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    LottoTicketValidator.validateNumbers(numbers);
    this.#numbers = numbers;
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchingNumberCount(others) {
    let count = 0;
    for (let number of this.#numbers) {
      if (others.includes(number)) {
        count++;
      }
    }
    return count;
  }

  hasNumber(other) {
    if (this.#numbers.includes(Number(other))) {
      return true;
    }
    return false;
  }
}

export default Lotto;
