import Validation from "./Validation.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    Validation.isDuplicate(numbers);
  }

  get get_numbers() {
    return this.#numbers;
  }

  formatNumbers() {
    let str = '[';
    str += (this.#numbers).join(', ');
    str += ']';
    return str;
  }
}

export default Lotto;
