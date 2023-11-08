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
  }

  // TODO: 추가 기능 구현
  showNumber() {
    console.log(this.#numbers);
  }

  checkWinStatus(winningNumbers, bonusNumber) {
    if (winningNumbers.length !== 6) {
      throw new Error("[ERROR] 당첨 번호는 6개여야 합니다.");
    }

    let matches = 0;

    for (let i = 0; i < winningNumbers.length; i++) {
      if (this.#numbers.includes(winningNumbers[i])) {
        matches++;
      }
    }

    if (matches === 5 && this.#numbers.includes(bonusNumber)) {
      return 7;
    }

    return matches;
  }
}

export default Lotto;
