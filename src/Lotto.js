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

  // TODO: 추가 기능 구현수
  getNumber() {
    return this.#numbers;
  }

  #match(winningNumber, bonusNumber) {
    let count = 0;
    let isMatchedBonus = false;

    winningNumber.forEach((number, idx) => {
      if (number === this.#numbers[idx]) {
        count += 1;
      } else if (!isMatchedBonus && bonusNumber === this.#numbers[idx]) {
        isMatchedBonus = true;
      }
    });

    return [count, isMatchedBonus];
  }

  getRank(winningNumber, bonusNumber) {
    const [count, isMatchedBonus] = this.#match(winningNumber, bonusNumber);
    if (count === 6) {
      return 1;
    }
    if (count === 5) {
      return isMatchedBonus ? 2 : 3;
    }
    if (count === 4) {
      return 4;
    }
    if (count === 3) {
      return 5;
    }
    return 0;
  }
}

export default Lotto;
