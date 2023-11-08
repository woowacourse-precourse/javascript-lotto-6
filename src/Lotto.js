class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.some((number) => typeof number !== 'number')) {
      throw new Error('[ERROR] 로또 번호는 숫자를 입력해주셔야합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.some((number) => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1 ~ 45 사이여야 합니다.');
    }

    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }

  // TODO: 추가 기능 구현
  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }

  duplicateTest(bonus) {
    return this.#numbers.includes(bonus);
  }
}

export default Lotto;
