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

    const INVALID_RANGE = numbers.some(number => number < 1 || number > 45);
    if (INVALID_RANGE) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자여야 합니다.');
    }

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
  }
}

export default Lotto;
