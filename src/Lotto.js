class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(num) {
    if (num.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (num.length != new Set([...num]).length) {
      throw new Error('[ERROR] 로또 번호가 중복됩니다.');
    }
  }

  result() {
    return this.#numbers;
  }
}

export default Lotto;
