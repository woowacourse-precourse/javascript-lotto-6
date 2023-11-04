class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#duplicate(numbers);
    this.#validateRange(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  #duplicate(numbers) {
    const uniqueNumbers = new Set(numbers);

    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
    }
  }

  #validateRange(numbers) {
    numbers.forEach(number => {
      if (number < 1 || number > 45) {
        throw new Error(
          '[ERROR] 로또 번호는 1이상 45이하의 숫자로 구성되어야 합니다.',
        );
      }
    });
  }
}

export default Lotto;
