class Lotto {
  #numbers;
  #bonusNumber;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
    this.#bonusNumber = null;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error("[ERROR] 중복된 숫자가 있습니다.");
    }

    this.#numbers = numbers.sort((a, b) => {
      return a - b;
    });
  }


  getNumbers() {
    return this.#numbers;
  }

  inBonusNumbers(bonus) {
    return this.#numbers.includes(bonus);
  }

  addBonusNumber(bonus) {
    this.#bonusNumber = bonus;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  checkLotto(other) {
    const matchNumbers = this.#numbers.filter((number) => {
      return other.#numbers.includes(number);
    });

    return matchNumbers.length;
  }
}

export default Lotto;
