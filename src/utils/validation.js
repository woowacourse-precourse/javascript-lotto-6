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

/**
 *
 * @param {Array} numbers
 * Array의 길이가 6인지 아닌지 validate하는 함수
 */
export const validateNumberLength = (numbers) => {
	if (numbers.length !== 6) {
		throw ERRORS.INVALID_NUMBERS_LENGTH;
	}
};

/**
 *
 * @param {Array} numbers
 * 중복된 숫자가 있는지 validate하는 함수
 */
export const validateDuplicate = (numbers) => {
	if (numbers.length !== new Set(numbers).size) {
		throw ERRORS.INVALID_NUMBERS_DUPLICATE;
	}
};

/**
 *
 * @param {Number} bonusNumber
 * @param {Array} winningNummber
 * 로또 번호에 이미 보너스 번호가 있는지 validate하는 함수
 */
export const validateInWinnerNumber = (bonusNumber, winningNummber) => {
	if (winningNummber.includes(bonusNumber)) {
		throw ERRORS.INVALID_NUMBER_IN_WINNINGNUMBER;
	}
};
