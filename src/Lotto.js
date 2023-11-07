class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6)
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    if (numbers.length !== new Set(numbers).size)
      throw new Error('[ERROR] 중복된 값이 존재합니다.');
    numbers.forEach(number => {
      if (!Number.isInteger(number))
        throw new Error('[ERROR] 정수가 아닌 값이 존재합니다.');
      if (number < 1 || 45 < number)
        throw new Error('[ERROR] 1~45범위 밖의 숫자가 존재합니다.');
    });
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
