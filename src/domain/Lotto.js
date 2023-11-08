export default class Lotto {
  #numbers;
  #correctTarget = 0;
  #correctBonus = 0;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numbersSet = new Set(numbers);
    if (numbersSet.size !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (numbers.length !== numbersSet.size) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  calculateResult(winningNumbers, bonusNumber) {
    let correctTarget = 0;
    let correctBonus = 0;
    for (let number of winningNumbers) {
      if (this.#numbers.includes(number)) correctTarget += 1;
    }
    if (this.#numbers.includes(bonusNumber)) correctBonus += 1;
    this.#correctTarget = correctTarget;
    this.#correctBonus = correctBonus;
  }

  judgeResult() {
    if (this.#correctTarget === 6) return 1;
    if (this.#correctTarget === 5 && this.#correctBonus) return 2;
    if (this.#correctTarget === 5 && !this.#correctBonus) return 3;
    if (this.#correctTarget === 4) return 4;
    if (this.#correctTarget === 3) return 5;
    return 0;
  }
}