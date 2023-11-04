class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#validateSize(numbers);
    this.#validateDuplicate(numbers);
    this.#validateRange(numbers);
    this.#sortedLotto(numbers);
  }

  getLotto() {
    return [...this.#numbers];
  }

  #validateSize(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateDuplicate(numbers) {
    numbers.forEach((number) => {
      if (this.duplicateCount(numbers, number) >= 2) {
        throw new Error('[ERROR] 로또 번호는 중복될 수 없습니다.');
      }
    });
  }

  duplicateCount(numbers, number) {
    return numbers.filter((current) => current === number).length;
  }

  #validateRange(numbers) {
    numbers.forEach((number) => {
      if (1 <= number && number >= 45) {
        throw new Error('[ERROR] 로또 번호의 숫자 범위는 1~45 입니다.');
      }
    });
  }

  #sortedLotto(numbers) {
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
