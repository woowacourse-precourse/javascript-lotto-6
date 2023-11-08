class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  #duplicate(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error("[ERROR] 로또 번호가 중복됩니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchedCount(matchedNumbers) {
    const uniqueNumbers = new Set(matchedNumbers);
    let count = 0;

    this.#numbers.forEach((number) => {
      if (uniqueNumbers.has(number)) {
        count++;
      }
    });

    return count;
  }
}

export default Lotto;
