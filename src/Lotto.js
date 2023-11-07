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
    if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1~45 사이여야 합니다.');
    }
    if (numbers.some(number => Number.isNaN(number))) {
      throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
    }
    if (numbers.some((number, index) => numbers.indexOf(number) !== index)) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  // TODO: 추가 기능 구현
  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
