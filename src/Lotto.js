class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if(new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호가 중복되었습니다.');
    }
  }

  // TODO: 추가 기능 구현
  makeLotto() {
    try {
      this.#validate(this.#numbers);
      return this.#numbers;
    } catch (e) {
      throw new Error(e);
    }
  }
}

export default Lotto;
