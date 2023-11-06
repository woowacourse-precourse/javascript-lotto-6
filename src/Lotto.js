class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw "[ERROR] 로또 번호는 6개여야 합니다.";
    }
    if (new Set(numbers).size !== 6) {
      throw "[ERROR] 중복되는 숫자가 있습니다.";
    }
  }

  toString() {
    return this.#numbers.sort((a, b) => a - b).join(", ");
  }

  getMatchingNumbers(winningNumbers) {
    return this.#numbers.filter((number) => winningNumbers.includes(number));
  }

  contains(number) {
    return this.#numbers.includes(number);
  }
}

module.exports = Lotto;
