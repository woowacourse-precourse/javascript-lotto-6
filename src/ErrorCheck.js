import {
	NUMBER_TYPE_ERROR,
	CANNOT_BUY_LOTTO_ERROR,
	LOTTO_RANGE_ERROR,
} from './Constant.js';

class ErrorCheck {
	static inputNumberCheck(input) {
		if (isNaN(input)) {
			throw new Error(NUMBER_TYPE_ERROR);
		}
	}

	static purchaseCountCheck(number) {
		if (number < 1) {
			throw new Error(CANNOT_BUY_LOTTO_ERROR);
		}
	}
	static rangeCheck(number) {
		if (number < 1 || number > 45) {
			throw new Error(LOTTO_RANGE_ERROR);
		}
	}
}

export default ErrorCheck;
