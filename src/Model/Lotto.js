class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#winningNumValid(numbers);
    this.#isDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  #winningNumValid(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 45 || numbers[i] < 1) {
        throw new Error(
          '[ERROR] 로또 번호는 1~45 사이의 숫자만 있어야 합니다.',
        );
      }
    }
  }

  #isDuplicate(numbers) {
    const set = new Set(numbers);
    if (set.length !== 6) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있으면 안됩니다.');
    }
  }
}

export default Lotto;
