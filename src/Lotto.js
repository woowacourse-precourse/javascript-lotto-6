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
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  match(winNumbers) {
    let matchCount = 0;
    this.#numbers.forEach(number => {
      if (winNumbers.includes(number)) matchCount++;
    });
    return matchCount;
  }
}

export default Lotto;
