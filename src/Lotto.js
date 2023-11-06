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

  match(winningNumber, bonusNumber) {
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
}

export default Lotto;
