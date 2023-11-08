import { ErrorMessages } from "../constants/Messages";

class ValidatorUtil {
	static isNumber(input) {
		if (!Number.isInteger(input)) throw new Error(ErrorMessages.NOT_NUMBER);
	}

	static isPositiveNumber(input) {
		if (input <= 0) throw new Error(ErrorMessages.NOT_POSITIVE_NUMBER);
	}

	static isCostValid(input) {
		if (input % 1000 != 0) throw new Error(ErrorMessages.NOT_MULTIPLES_OF_1000);
	}

	static isNumberInRange(input) {
		if (input < 1 || input > 45)
			throw new Error(ErrorMessages.NOT_NUMBER_IN_RANGE);
	}

	static isLength(input) {
		if (input.length !== 6) throw new Error(ErrorMessages.NOT_LENGTH_6);
	}

	static isDuplicated(numbers, bonus) {
		if (new Set([...numbers, bonus]).size !== numbers.length + 1) {
			throw new Error(ErrorMessages.NOT_UNIQUE_NUMBERS);
		}
	}
}

export default ValidatorUtil;
