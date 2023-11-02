import lottoNumber from '../constants/lottoNumber.js';
import errorMessage from '../constants/errorMessage.js';

class winningNumberArrayValidator {
	validateNotNumber(winningNumberArray) {
		winningNumberArray.forEach((winningNumber) => {
			if (Number.isNaN(winningNumber)) {
				throw new Error(errorMessage.NOT_NUMBER);
			}
		});
	}

	validateArrayLength(winningNumberArray) {
		if (winningNumberArray.length !== 6) {
			throw new Error(errorMessage.NOT_SIX_COUNT);
		}
	}

	validateDuplicatedNumber(winningNumberArray) {
		if (winningNumberArray.length !== (new Set(winningNumberArray)).size) {
			throw new Error(errorMessage.DUPLICATED_NUMBER);
		}
	}

	validateNumberRange(winningNumberArray) {
		winningNumberArray.forEach(winningNumber => {
			if (winningNumber < lottoNumber.firstNumber || winningNumber > lottoNumber.lastNumber) {
				throw new Error(errorMessage.OUT_OF_RANGE);
			}
		});
	}

	static validate(winningNumberArray) {
		this.validateNotNumber(winningNumberArray);
		this.validateArrayLength(winningNumberArray);
		this.validateDuplicatedNumber(winningNumberArray);
		this.validateNumberRange(winningNumberArray);
	}
}

export default winningNumberArrayValidator;