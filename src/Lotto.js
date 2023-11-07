import Check from "./Util/Check.js";

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

    // TODO: 추가 기능 구현
    if (new Set(numbers).size < numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 포함될 수 없습니다.");
    }
  }

  show() {
    return this.#numbers;
  }
}

export default Lotto;
