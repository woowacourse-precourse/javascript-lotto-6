import ValidationService from './Validation.service.js';

export default class ValidationController {
  #validationService;

  constructor() {
    this.#validationService = new ValidationService();
  }

  validateInputMoney(num) {
    this.#validationService.isNumber(num);
    this.#validationService.isDividedBy1000(num);
  }

  validatePurchasedTicket(ticket) {
    this.#validationService.isInRange(ticket);
    this.#validationService.isUnique(ticket);
    this.#validationService.isSorted(ticket);
  }

  validateWinningNumbers(ticket) {
    this.#validationService.hasSixNumbers(ticket);
    ticket.forEach((num) => this.#validationService.isNumber(num));
    this.#validationService.isInRange(ticket);
    this.#validationService.isUnique(ticket);
  }

  validateBonusNumber(bonus, winningNumbers) {
    this.#validationService.isNumber(bonus);
    this.#validationService.isInRange([bonus]);
    this.#validationService.isUnique([...winningNumbers, bonus]);
  }
}
