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

    if (numbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    if (this.#hasDuplicates(numbers)) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야합니다.");
    }
  }

  #hasDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers.size !== numbers.length;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
