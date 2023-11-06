import ValidationService from './Validation.service';

const ERROR_MESSAGES = {
  isNaN: '[ERROR] 입력한 금액이 숫자가 아닙니다.',
  notDivided: '[ERROR] 1000 단위의 금액을 입력하세요.',
  overRange: '[ERROR] 숫자는 1부터 45사이여야 합니다.',
};

export default class ValidationController {
  #validationService;

  constructor() {
    this.#validationService = new ValidationService();
  }

  // num: string
  validateInputMoney(num) {
    if (!this.#validationService.isNumber(num)) {
      throw new Error(ERROR_MESSAGES.isNaN);
    }
    if (!this.#validationService.isDividedBy1000(num)) {
      throw new Error(ERROR_MESSAGES.notDivided);
    }
  }

  validatePurchasedTickets(tickets) {
    tickets.forEach((ticket) => {
      if (!this.#validationService.isInRange(ticket)) {
        throw new Error(ERROR_MESSAGES.overRange);
      }
    });
  }
}
