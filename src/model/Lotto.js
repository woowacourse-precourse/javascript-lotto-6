import { ERROR_MESSAGES } from '../constants/messages.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    const numberReg = /^[0-9]+$/;
    if (numbers.length !== 6) {
      throw new Error(ERROR_MESSAGES.ONLY_SIX_NUMBERS);
    }
    numbers.forEach(number => {
      if (!numberReg.test(number)) {
        throw new Error(ERROR_MESSAGES.ONLY_NUMBERS);
      }
      if (number > 45 || number < 1) {
        throw new Error(ERROR_MESSAGES.NUMBER_RANGE);
      }
    });
  }

  getNumbers() {
    return this.#numbers;
  }

  calculateRank(winningLottos, bonusLotto) {
    const winningNumberCount = this.#numbers.filter(number =>
      winningLottos.includes(number),
    ).length;

    return this.#determineRank(
      winningNumberCount,
      this.#numbers.includes(bonusLotto),
    );
  }

  #determineRank(winningNumberCount, hasBonus) {
    const rankMapping = { 6: 1, 5: hasBonus ? 2 : 3, 4: 4, 3: 5 };
    return rankMapping[winningNumberCount] || 0;
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
