import errorMessage from '../constants/errorMessage.js';
import lottoNumber from '../constants/lottoNumber.js';

class BonusNumberValidator {
	validateNumber(bonusNumber) {
		if (isNaN(bonusNumber)) {
			throw new Error(errorMessage.NOT_NUMBER);
		}
	}

	validateNumberRange(bonusNumber) {
		if (Number(bonusNumber) < lottoNumber.firstNumber || Number(bonusNumber) > lottoNumber.lastNumber) {
			throw new Error(errorMessage.OUT_OF_RANGE);
		}
	}

	validateAlreadyPickedNumber(bonusNumber, winningNumberArray) {
		if (winningNumberArray.includes(Number(bonusNumber))) {
			throw new Error(errorMessage.ALREADY_PICKED_NUMBER);
		}
	}

	validateNaturalNumber(bonusNumber) {
		if (!Number.isInteger(Number(bonusNumber))) {
			throw new Error(errorMessage.NOT_NATURAL_NUMBER);
		}
	}

	validateUnusualCase(bonusNumber) {
		if (bonusNumber !== Number(bonusNumber).toString()) {
			throw new Error(errorMessage.UNUSUAL_INPUT);
		}
	}

	static validate(bonusNumber, winningNumberArray) {
		const bonusNumberValidator = new BonusNumberValidator();
		bonusNumberValidator.validateNumber(bonusNumber);
		bonusNumberValidator.validateNumberRange(bonusNumber);
		bonusNumberValidator.validateUnusualCase(bonusNumber);
		bonusNumberValidator.validateNaturalNumber(bonusNumber);
		bonusNumberValidator.validateAlreadyPickedNumber(bonusNumber, winningNumberArray);
	}
}

export default BonusNumberValidator;