class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const number of numbers) {
      if (typeof number !== 'number' || isNaN(number)) {
        throw new Error('[ERROR] 로또 번호는 숫자여야 합니다.');
      }
    }
    if (numbers.some((item) => typeof item === 'string')) {
      throw new Error('[ERROR]');
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
