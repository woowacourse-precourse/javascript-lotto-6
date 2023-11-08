import { ERROR_MESSAGE } from "../constants/constants.js";

class LottoBonusValidator {
    static bonusLengthValidation(number) {
        if (number.length !== 1) {
            throw new Error(ERROR_MESSAGE.bonusLengthError);
        }
    }

    static bonusRangeValidation(number) {
        const isOutOfRange = number < 1 || number > 45;
        if (isOutOfRange) {
            throw new Error(ERROR_MESSAGE.lottoRangeError);
        }
    }

    static bonusTypeValidation(number) {
        const isTypeValid = Number.isInteger(number);
        if (!isTypeValid) {
            throw new Error(ERROR_MESSAGE.lottoTypeError);
        }
    }
}

export default LottoBonusValidator;
