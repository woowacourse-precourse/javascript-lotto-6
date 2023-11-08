import validateLotteryNumbers from './validators/validateLotteryNumbers.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    validateLotteryNumbers(numbers);
  }

  // TODO: 추가 기능 구현
}

export default Lotto;
