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

    const numberSet = new Set();
    for (let i = 0; i < numbers.length; i++) {
      if (numberSet.has(numbers[i])) {
        throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다3");
      }
      numberSet.add(numbers[i]);
    }
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
