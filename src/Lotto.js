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
    if (new Set(numbers).size !== 6) {
      throw new Error('[ERROR] 각 로또 번호는 중복될 수 없습니다.');
    }
    const isOutOfRange = numbers.some((number) => number > 45 || number < 1);
    if (isOutOfRange) {
      throw new Error('[ERROR] 각 수는 1-45 사이의 정수만 가능합니다.');
    }
  }
}

export default Lotto;
