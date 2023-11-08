class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const expectedLength = 6;
    const minNumber = 1;
    const maxNumber = 45;

    if (numbers.length !== expectedLength) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (!numbers.every(item => Number.isInteger(item))) {
      throw new Error("[ERROR] 로또 번호는 정수만 가능합니다.");
    }

    const setNumbers = new Set(numbers);
    if (setNumbers.size !== expectedLength) {
      throw new Error("[ERROR] 로또 번호는 중복이 있어서는 안됩니다.");
    }

    if (!numbers.every(item => item >= minNumber && item <= maxNumber)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }

    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    if (JSON.stringify(sortedNumbers) !== JSON.stringify(numbers)) {
      throw new Error("[ERROR] 로또 번호는 오름차순으로 적어야 합니다.");
    }
  }

}

export default Lotto;