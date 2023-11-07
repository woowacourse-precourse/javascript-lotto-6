class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  get numbers() {
    return this.#numbers;
  }

  #validate(numbers) {
    if (numbers.some(isNaN)) {
      throw new Error('[ERROR] 당첨 번호는 숫자로 입력해야 합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (numbers.some((num) => num < 1 || num > 45)) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
    }

    const UNIQUE_NUMBERS = new Set(numbers);
    if (UNIQUE_NUMBERS.size !== 6) {
      throw new Error('[ERROR] 당첨 번호는 중복될 수 없습니다.');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
