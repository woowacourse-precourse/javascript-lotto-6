class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // console.log(numbers);
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #duplicate(numbers) {
    const newSet = new Set(numbers);
    if (newSet.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
  }

  getNumbers() {
    let stringNum = '';
    for (let i = 0; i < 5; i += 1) {
      stringNum = `${stringNum}${this.#numbers[i]}, `;
    }
    stringNum = `${stringNum}${this.#numbers[this.#numbers.length - 1]}`;
    return stringNum;
  }

  getNumArr() {
    return this.#numbers;
  }
}

export default Lotto;
