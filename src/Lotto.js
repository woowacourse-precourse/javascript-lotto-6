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
    if (numbers[0] < 1 || numbers[5] > 45) {
      throw new Error("[ERROR] 로또 번호는 1~45 사이여야 합니다.");
    }
    const filterArray = new Set(numbers);
    if (numbers.length != filterArray.size) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
  compareNumbers(winningNumbers, bonusNumber) {
    const matchedNumbers = this.#numbers.filter((number) =>
      winningNumbers.includes(number)
    );
    if (this.#numbers.includes(bonusNumber)) {
      return [matchedNumbers.length.toString(), "bonusTrue"];
    } else {
      return [matchedNumbers.length.toString(), "bonusFalse"];
    }
  }
}

export default Lotto;
