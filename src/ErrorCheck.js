import { NUMBER_TYPE_ERROR, CANNOT_BUY_LOTTO_ERROR } from './Constant.js';

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
}

export default ErrorCheck;
