import ValidationController from './validation/Validation.controller.js';

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
    const validationController = new ValidationController();
    validationController.validatePurchasedTicket(numbers);
  }

  findRank({ winningNumbers, bonusNumber }) {
    const RANK = [0, 0, 0, 5, 4, 3, 1];
    let count = 0;
    this.#numbers.forEach((num) => {
      if (winningNumbers.includes(num)) {
        count += 1;
      }
    });
    if (count === 5 && this.#numbers.includes(bonusNumber)) {
      return 2;
    }
    return RANK[count];
  }
}

export default Lotto;
