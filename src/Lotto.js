class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplication(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  #validateDuplication(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  checkWinningNumbers(winningNumbers) {
    let count = 0;
    for (const num of this.#numbers) {
      if (winningNumbers.includes(num)) {
        count++;
      }
    }

    return count;
  }

  checkBonusNumber(bonusNumber) {
    if (this.#numbers.includes(bonusNumber)) return true;
    return false;
  }
}

export default Lotto;
