import {OUTPUT, OUTPUT_ERROR} from "./text.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const result = Array.from(new Set(numbers));
    if (result.length !== 6) {
      throw new Error(OUTPUT_ERROR.set_err);
    }
  }
}

export default Lotto;
