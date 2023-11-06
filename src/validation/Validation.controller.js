import ValidationService from './Validation.service';

export default class ValidationController {
  #validationService;

  constructor() {
    this.#validationService = new ValidationService();
  }

  // num: string
  validateInputMoney(num) {
    if (!this.#validationService.isNumber(num)) {
      throw new Error('[ERROR] 입력한 금액이 숫자가 아닙니다.');
    }
  }
}
