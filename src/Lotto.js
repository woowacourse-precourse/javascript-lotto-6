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
      throw new Error("[ERROR] 로또 번호는 중복될 수 없습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getMatchingNumberCount(others) {
    let count = 0;
    for (let number of this.#numbers) {
      if (others.includes(number)) {
        count++;
      }
    }
    return count;
  }

  hasNumber(other) {
    if(this.#numbers.includes(Number(other))) {
      return true;
    }
    return false;
  }
}

export default Lotto;
