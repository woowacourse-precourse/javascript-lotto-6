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
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }
    if (numbers.some(num => num < 1 || num > 45)) {
      throw new Error("[ERROR] 번호는 1과 45 사이여야 합니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }

  toString() {
    return `[${this.#numbers.join(", ")}]`;
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
