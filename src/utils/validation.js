import { ERRORS } from "../constants/Message.js";

/**
 *
 * @param {Number} number
 * 1,000원 단위로 나누어 떨어지는지 validate하는 함수
 */
export const validateUnit = (number) => {
	if (number % 1000 !== 0) {
		throw ERRORS.INVALID_UNIT_INPUT;
	}
};

/**
 *
 * @param {Number} number
 * 입력이 숫자인지 validate하는 함수
 */
export const validateNumber = (number) => {
	if (isNaN(number)) {
		throw ERRORS.INVALID_NUMBER;
	}
};

/**
 *
 * @param {Number} number
 * 입력한 숫자가 범위 내에 있는지 validate하는 함수
 */
export const validateRange = (number) => {
	if (number < 1 || number > 45) {
		throw ERRORS.INVALID_NUMBER_RANGE;
	}
};

export const validateNumberLength = (numbers) => {
	if (numbers.length !== 6) {
		throw ERRORS.INVALID_NUMBERS_LENGTH;
	}
};

export const validateDuplicate = (numbers) => {
	if (numbers.length !== new Set(numbers).size) {
		throw ERRORS.INVALID_NUMBERS_DUPLICATE;
	}
};

export const validateInWinnerNumber = (bonusNumber, winningNummber) => {
	if (winningNummber.includes(bonusNumber)) {
		throw ERRORS.INVALID_NUMBER_IN_WINNINGNUMBER;
	}
};
