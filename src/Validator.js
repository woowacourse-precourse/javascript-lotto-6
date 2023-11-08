import {
	LOTTO_NUMBERS_CEIL,
	LOTTO_NUMBERS_FLOOR,
	LOTTO_PRICE,
	SHOULD_AVOID_DUP_BONUS,
	SHOULD_BE_DIVIDED_BY_PRICE,
	SHOULD_BE_IN_RANGE,
	SHOULD_BE_NATURAL_NUMBER,
	SHOULD_HAVE_ENOUGH_NUMBER,
} from './constant.js';

class Validator {
	static checkIsNaturalNumber(str) {
		return /^[1-9]\d*$/.test(str);
	}

	static checkIsDividedByLottoPrice(str) {
		return parseInt(str, 10) % LOTTO_PRICE === 0;
	}

	static checkNoDupSize(array, expectedSize) {
		const set = new Set(array);
		return set.size === expectedSize && array.length === expectedSize;
	}

	static checkAllNumberInRange(array, start, end) {
		const isNotValid = array.some((str) => {
			if (!Validator.checkIsNaturalNumber(str)) {
				return true;
			}
			return parseInt(str, 10) < start || parseInt(str, 10) > end;
		});

		return !isNotValid;
	}

	static checkBudgetValidity(str) {
		const isStrNaturalNumber = Validator.checkIsNaturalNumber(str);
		if (!isStrNaturalNumber) {
			throw new Error(SHOULD_BE_NATURAL_NUMBER);
		}

		const isStrDivideByPrice = Validator.checkIsDividedByLottoPrice(str);
		if (!isStrDivideByPrice) {
			throw new Error(SHOULD_BE_DIVIDED_BY_PRICE);
		}

		return true;
	}

	static checkWinningNumberValidity(str) {
		const winningNumberArray = str?.split(',');

		const isArraySizeCorrect = Validator.checkNoDupSize(winningNumberArray, 6);
		if (!isArraySizeCorrect) {
			throw new Error(SHOULD_HAVE_ENOUGH_NUMBER);
		}

		const isAllNumberInRange = Validator.checkAllNumberInRange(
			winningNumberArray,
			LOTTO_NUMBERS_FLOOR,
			LOTTO_NUMBERS_CEIL,
		);
		if (!isAllNumberInRange) {
			throw new Error(SHOULD_BE_IN_RANGE);
		}

		return true;
	}

	static generateBonusNumberValidateFunc(winningNumber) {
		return (str) => {
			Validator.checkBonusNumberCondition(str);
			Validator.checkWinningNumberBonusNumberDup(winningNumber, str);
		};
	}

	static checkBonusNumberCondition(str) {
		const isStrNaturalNumber = Validator.checkIsNaturalNumber(str);
		if (!isStrNaturalNumber) {
			throw new Error(SHOULD_BE_NATURAL_NUMBER);
		}

		const isNumberInRange =
			parseInt(str, 10) >= LOTTO_NUMBERS_FLOOR &&
			parseInt(str, 10) <= LOTTO_NUMBERS_CEIL;
		if (!isNumberInRange) {
			throw new Error(SHOULD_BE_IN_RANGE);
		}

		return true;
	}

	static checkWinningNumberBonusNumberDup(winningNumber, bonusNumber) {
		if (winningNumber.split(',').indexOf(bonusNumber) > -1) {
			throw new Error(SHOULD_AVOID_DUP_BONUS);
		}
	}
}
export default Validator;
