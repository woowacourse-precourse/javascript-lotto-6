import errorMessage from '../constants/errorMessage.js';
import lottoNumber from '../constants/lottoNumber.js';

class BonusNumberValidator {
	validateNumber(bonusNumber) {
		if (Number.isNaN(bonusNumber)) {
			throw new Error(errorMessage.NOT_NUMBER);
		}
	}

	validateNumberRange(bonusNumber) {
		if (bonusNumber < lottoNumber.firstNumber || bonusNumber > lottoNumber.lastNumber) {
			throw new Error(errorMessage.OUT_OF_RANGE);
		}
	}

	validateAlreadyPickedNumber(bonusNumber, winningNumberArray) {
		if (winningNumberArray.includes(bonusNumber)) {
			throw new Error(errorMessage.ALREADY_PICKED_NUMBER);
		}
	}

	static validate(bonusNumber, winningNumberArray) {
		const bonusNumberValidator = new BonusNumberValidator();
		bonusNumberValidator.validateNumber(bonusNumber);
		bonusNumberValidator.validateAlreadyPickedNumber(bonusNumber, winningNumberArray);
		bonusNumberValidator.validateNumberRange(bonusNumber);
	}
}

export default BonusNumberValidator;