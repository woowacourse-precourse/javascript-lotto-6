import { ErrorMessage } from '../constants/ErrorMessage.js';

class Validator {
  static purchaseCostValidator(input) {
    const purchaseCost = parseInt(input, 10);
    if (Number.isNaN(purchaseCost)) {
      throw new Error(ErrorMessage.INVALID_PURCHASE_COST);
    }
    if (purchaseCost < 0) {
      throw new Error(ErrorMessage.INVALID_PURCAHSE_COST_RANGE);
    }
    if (purchaseCost % 1000 !== 0) {
      throw new Error(ErrorMessage.INVALID_PURCHASE_COST_UNIT);
    }
  }
}

export default Validator;
