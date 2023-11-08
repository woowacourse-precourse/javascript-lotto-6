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

    const uniqueNumbers = [...new Set(numbers)];
    if (uniqueNumbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }

    for (let i = 0; i < numbers.length; i++) {
      const number = numbers[i];
      if (isNaN(number) || number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }
  checkWinningNumbers(winNum, bonusNum) {
    let matchCount = 0;

    for (let i = 0; i < this.#numbers.length; i++) {
      if (winNum.includes(this.#numbers[i])) {
        matchCount++;
      }
    }

    if (matchCount === 5 && this.#numbers.includes(bonusNum)) {
      return 51;
    }

    switch (matchCount) {
      case 3:
      case 4:
      case 5:
      case 6:
        return matchCount;
      default:
        return 0;
    }
  }
}

export default Lotto;