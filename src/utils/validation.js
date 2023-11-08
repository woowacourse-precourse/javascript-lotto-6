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
	if (isNaN(number) || !number.trim()) {
		throw ERRORS.INVALID_NUMBER;
	}
};
