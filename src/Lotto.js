const { Random } = require("@woowacourse/mission-utils");

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
    if (!Array.isArray(numbers) || numbers.some((num) => num < 1 || num > 45)) {
      throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 로또 번호에 중복된 숫자가 있습니다.");
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  static generateRandom() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    numbers.sort((a, b) => a - b);
    return new Lotto(numbers);
  }

  checkWinningNumbers(winningNumbers, bonusNumber) {
    const matchedNumbers = this.#numbers.filter((num) =>
      winningNumbers.includes(num)
    );
    const isBonusNumberMatched = this.#numbers.includes(bonusNumber);

    if (matchedNumbers.length === 6) {
      return 1; // 1등
    } else if (matchedNumbers.length === 5 && isBonusNumberMatched) {
      return 2; // 2등
    } else if (matchedNumbers.length === 5) {
      return 3; // 3등
    } else if (matchedNumbers.length === 4) {
      return 4; // 4등
    } else if (matchedNumbers.length === 3) {
      return 5; // 5등
    } else {
      return 0; // 꽝
    }
  }
}

module.exports = Lotto;
