class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6 || new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 6개여야 합니다.");
    }
    if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
  }

  static generate() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    return new Lotto(numbers);
  }
}

module.exports = Lotto;
