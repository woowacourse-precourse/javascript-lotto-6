class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getWinningCount(winningLotto) {
    let count = 0;
    winningLotto.forEach((number) => {
      if (this.#numbers.includes(Number(number))) {
        count += 1;
      }
    });

    return count;
  }

  checkWinningResult(count, bonusLotto, winningResult) {
    if (count === 3) {
      winningResult.fifth.push(this.#numbers);
    }

    if (count === 4) {
      winningResult.fourth.push(this.#numbers);
    }

    if (count === 5) {
      if (this.#numbers.includes(bonusLotto)) {
        winningResult.second.push(this.#numbers);
      } else {
        winningResult.third.push(this.#numbers);
      }
    }

    if (count === 6) {
      winningResult.first.push(this.#numbers);
    }
  }
}

export default Lotto;
