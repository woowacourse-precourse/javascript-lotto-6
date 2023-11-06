import { ERROR } from "../constants/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.invalidLength);
    }
    if (numbers.length !== new Set(numbers).size) {
      throw new Error(ERROR.duplicatedNumber);
    }
    if (numbers.some((num) => num > 45 || num < 0)) {
      throw new Error(ERROR.invalidLength);
    }
  }

  getNumbers() {
    return this.#numbers;
  }

  getNumbersCount(winningNumbers, bonusNumbers) {
    const winning = this.#numbers.filter((num) =>
      winningNumbers.includes(num),
    ).length;
    const bonus = this.#numbers.includes(bonusNumbers);
    
    return [winning + bonus, bonus];
  }

  determineRanking(winningNumbers, bonusNumbers) {
    const [allCount, bonus] = this.getNumbersCount(winningNumbers, bonusNumbers);

    if (allCount === 3) return '5등';
    if (allCount === 4) return '4등';
    if (allCount === 5) return '3등';
    if (allCount === 6 && bonus) return '2등';
    if (allCount === 6) return '1등';
    return '낙첨';
  }
}

export default Lotto;
