import Validator from './Validator.js';

function isDividedByThousand(value) {
  return value % 1000 === 0;
}

class PaymentValidator extends Validator {
  evaluate(value) {
    if (!this.isValidValue(value) || !isDividedByThousand(value)) {
      throw new Error('올바른 구입 금액을 입력하세요.');
    }
    return value;
  }
}

export default PaymentValidator;
