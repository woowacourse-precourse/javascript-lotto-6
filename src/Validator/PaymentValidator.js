import Validator from './Validator.js';

class PaymentValidator extends Validator {
  evaluate(value) {
    const numberValue = Number(value);
    if (!this.isValidValue(value) || !this.isDividedByThousand(numberValue)) {
      throw new Error('올바른 구입 금액을 입력하세요.');
    }
    return numberValue;
  }

  isDividedByThousand(value) {
    return value % 1000 === 0;
  }
}

export default PaymentValidator;
