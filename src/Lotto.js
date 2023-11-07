class Lotto {
  #numbers;

  constructor(numbers = []) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers = []) {
    Lotto.validateNumbersLength(numbers);
    Lotto.validateUniqueNumbers(numbers);
    Lotto.validateNumberRange(numbers);
  }

  static validateNumbersLength(numbers = []) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static validateUniqueNumbers(numbers = []) {
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않은 6개여야 합니다.');
    }
  }

  static validateNumberRange(numbers = []) {
    if (!numbers.every((number) => this.isValidNumber(number))) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 정수여야 합니다.');
    }
  }

  static isValidNumber(number = []) {
    return Number.isInteger(number) && number >= 1 && number <= 45;
  }

  getNumbers() {
    return [...this.#numbers];
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  getMatchCount(winningNumbersArray = []) {
    return this.#numbers.filter((number) =>
      winningNumbersArray.includes(number)
    ).length;
  }

  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}
export default Lotto;
