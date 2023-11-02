class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const numberSet = new Set(numbers);
    if (numberSet.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 값이어야 합니다.");
      }
    });
  }

  get numbers() {
    return this.#numbers;
  }

  contains(number) {
    return this.#numbers.includes(number);
  }

  matchCount(otherNumbers) {
    return this.#numbers.filter((number) => otherNumbers.includes(number))
      .length;
  }
}

export default Lotto;
