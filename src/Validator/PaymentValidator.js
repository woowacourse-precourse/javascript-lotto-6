import Validator from './Validator.js';

class PaymentValidator extends Validator {
  evaluate(value) {
    if (!this.isValidValue(value) || !this.isDividedByThousand(value)) {
      throw new Error('올바른 구입 금액을 입력하세요.');
    }
    return value;
  }

  isDividedByThousand(value) {
    return value % 1000 === 0;
  }
}

export default PaymentValidator;
