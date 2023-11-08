import { ERROR_MESSAGE } from "../constants/constants.js";

class InputValidator {
    static inputPurchaseValidation(price) {
        if (!Number.isInteger(price / 1000)) {
            throw new Error(ERROR_MESSAGE.purchaseError);
        }
    }

    static purchaseRangeValidation(price) {
        if (price <= 0) {
            throw new Error(ERROR_MESSAGE.purchaseRangeError);
        }
    }
}

export default InputValidator;
