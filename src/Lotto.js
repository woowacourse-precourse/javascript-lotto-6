class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6 || numbers.includes('')) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    for (const NUMBER of numbers) {
      if (Number(NUMBER) < 1 || Number(NUMBER) > 45 || isNaN(Number(NUMBER))) {
        throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      }
    }
    const NUMBERS_SET = new Set(numbers);
    if (NUMBERS_SET.size !== 6) {
      throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
    }
  }
}

export default Lotto;
