class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numberSet = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numberSet.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  get Numbers() {
    return this.#numbers;
  }
}

export default Lotto;
