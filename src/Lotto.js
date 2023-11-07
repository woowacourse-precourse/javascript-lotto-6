class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateRange(numbers);
    this.#validateDuplication(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateRange(numbers) {
    for (let num of numbers) {
      if (num < 1 || num > 45) {
        throw new Error("[ERROR] 범위는 1에서 45사이여야 합니다.");
      }
    }
  }

  #validateDuplication(numbers) {
    numbers = Array.from(new Set(numbers));
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 중복된 번호가 있습니다.");
    }
  }
}

export default Lotto;
