import Validator from './utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    try {
      this.#validate(numbers);
      Validator.validateLotto(numbers);
      this.#numbers = numbers;
    } catch (error) {
      throw error;
    }
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  // TODO: 추가 기능 구현
  getWinningNumbers() {
    return this.#numbers;
  }

  checkMatchNumbers(winningNumbers) {
    return this.#numbers.filter(number => winningNumbers.includes(number))
      .length;
  }

  hasBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  checkPrize(winningNumbers, bonusNumber) {
    const matchCount = this.checkMatchNumbers(winningNumbers);
    const hasBonus = this.hasBonusNumber(bonusNumber);

    console.log(matchCount, hasBonus);
  }
}

export default Lotto;
