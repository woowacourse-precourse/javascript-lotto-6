import ValidationService from './Validation.service';

const ERROR_MESSAGES = {
  isNaN: '[ERROR] 입력한 금액이 숫자가 아닙니다.',
  notDivided: '[ERROR] 1000 단위의 금액을 입력하세요.',
  overRange: '[ERROR] 숫자는 1부터 45사이여야 합니다.',
  countError: '[ERROR] 티켓의 번호는 개수가 6개로 이루어져야 합니다.',
  notUnique: '[ERROR] 티켓의 번호는 중복되면 안됩니다.',
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
      if (!this.#validationService.hasSixNumbers(ticket)) {
        throw new Error(ERROR_MESSAGES.countError);
      }
      if (!this.#validationService.isUnique(ticket)) {
        throw new Error(ERROR_MESSAGES.notUnique);
      }
    });
  }
}
