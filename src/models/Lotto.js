class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateNumbers(numbers);
    this.#numbers = numbers;
  }

  #validateNumbers(numbers) {
    this.#validateCount(numbers);
    this.#validateUniqueness(numbers);
    this.#validateRange(numbers);
    this.#validateDigits(numbers);
  }

  #validateCount(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  #validateUniqueness(numbers) {
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error('[[ERROR] 로또 번호는 중복되지 않아야 합니다.');
    }
  }

  #validateRange(numbers) {
    if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
    }
  }

  #validateDigits(numbers) {
    if (numbers.some(number => typeof number !== 'number')) {
      throw new Error('[ERROR] 잘못된 형식입니다.');
    }
  }

  showLotto() {
    return `${this.#numbers.sort((a, b) => a - b).join(', ')}\n`;
  }

  getNumbers() {
    return this.#numbers;
  }

  matchNums(winningNums, bonusNum) {
    const matches = this.#numbers.filter(num =>
      winningNums.includes(num),
    ).length;
    const hasBonusMatch = this.#numbers.includes(bonusNum);

    if (matches < 3) return -1;
    if (matches === 5 && hasBonusMatch) return 5;
    return matches - 3;
  }
}

export default Lotto;
