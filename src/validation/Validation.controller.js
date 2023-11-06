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
    this.#validationService.isInRange(ticket);
  }
}
