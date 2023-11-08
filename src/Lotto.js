class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#between1And45(numbers);
    this.#sort(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #duplicate(numbers) {
    const set = new Set(numbers);
    if (set.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되면 안됩니다.");
    }
  }

  #between1And45(numbers) {
    for (const number of numbers) {
      if (!Number.isInteger(number)) {
        throw new Error("[ERROR] 로또 번호는 정수여야 합니다.");
      }

      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  #sort(numbers) {
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
