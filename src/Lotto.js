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
    if (!this.#hasUniqueNumbers(numbers)) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  #hasUniqueNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size === 6;
  }
}

export default Lotto;
