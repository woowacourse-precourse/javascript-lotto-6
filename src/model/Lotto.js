class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sortLotto(numbers);
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    if (new Set(numbers).size !== numbers.length) {
      throw new Error('[ERROR] 중복된 로또번호가 있습니다.');
    }
  }

  #sortLotto(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  calculate(winning, bonus) {
    const matchingNumbers = this.getMatchingNumbers(winning);
    const bonusMatch = this.getBonusMatch(bonus);
    return this.updateState(matchingNumbers.length, bonusMatch);
  }

  getMatchingNumbers(winning) {
    return this.#numbers.filter((number) => winning.includes(number));
  }

  getBonusMatch(bonus) {
    return this.#numbers.includes(bonus);
  }

  updateState(matchingNumbers, bonusMatch) {
    if (matchingNumbers === 3) {
      return 0;
    } else if (matchingNumbers === 4) {
      return 1;
    } else if (matchingNumbers === 5 && bonusMatch) {
      return 3;
    } else if (matchingNumbers === 5) {
      return 2;
    } else if (matchingNumbers === 6) {
      return 4;
    }
    return -1;
  }

  getLotto() {
    return this.#numbers;
  }
}

export default Lotto;
