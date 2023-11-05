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
  }

  #checkNumber(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < 1 || numbers[i] > 45 || !Number.isInteger(numbers[i])) {
        throw new Error('[ERROR] 자연수');
      }
    }
  }

  #checkSameNumber(numbers) {
    const set = new Set(numbers);
    if (set.size() !== numbers.length) {
      throw new Error('[ERROR] 숫자 중복');
    }
  }
}

export default Lotto;
