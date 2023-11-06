import { ERROR_MESSAGES } from '../constants/messages.js';
import InputValidator from '../utils/InputValidator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    InputValidator.validateNumbers(numbers);
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
