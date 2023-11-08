import { ERROR_MESSAGE } from "../constants/constants.js";

class LottoValidator {
    static lottoLengthValidation(numbers) {
        if (numbers.length !== 6) {
            throw new Error(ERROR_MESSAGE.lottoLengthError);
        }
    }

    static lottoDuplicatedValidation(numbers) {
        const isDup = numbers.some(function(x) {
            return numbers.indexOf(x) !== numbers.lastIndexOf(x);
        });
        if (isDup) {
            throw new Error(ERROR_MESSAGE.lottoDuplicatedError);
        }
    }

    static lottoRangeValidation(numbers) {
        const isOutOfRange = numbers.some(function(number) {
            return number < 1 || number > 45;
        });
        if (isOutOfRange) {
            throw new Error(ERROR_MESSAGE.lottoRangeError);
        }
    }
}

export default LottoValidator;
