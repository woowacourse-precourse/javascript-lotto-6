import {
	LOTTO_ERROR,
	BONUS_ERROR,
	POSSIBLE_MIN_INPUT_LENGTH,
	POSSIBLE_MAX_INPUT_LENGTH,
	POSSIBLE_MAX_NUMBER,
	REG_EXP,
	REG_EXP_EXCEPT_COMMA,
	POSSIBLE_MIN_NUMBER,
} from './constants';
import LottoError from './Error';

class Validator {
	static checkInputLength(input) {
		if (input === '') {
			throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.NO_BLANK);
		}
		if (input.length < POSSIBLE_MIN_INPUT_LENGTH) {
			throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.UNDER_LENGTH);
		}
		if (input.length > POSSIBLE_MAX_INPUT_LENGTH) {
			throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.OVER_LENGTH);
		}
		return input;
	}
	static checkIfBlankExists = (input) => {
		if (input.match(' ')) {
			throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.NO_BLANK);
		}
		return input;
	};
	static checkIfCharsExists(input, type = 'lotto') {
		const reg1 = new RegExp(REG_EXP);
		const reg2 = new RegExp(REG_EXP_EXCEPT_COMMA);
		switch (type) {
			case 'lotto':
				if (input.match(reg1)) {
					throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.NO_CHARS);
				}
				break;
			case 'bonus':
				if (input.match(reg2)) {
					throw new LottoError(BONUS_ERROR.name, BONUS_ERROR.message.NO_CHARS);
				}
				break;
		}
		return input;
	}
	static checkIfDuplicateExists(input) {
		const inputArr = input.split(',');
		if (inputArr.length === new Set(inputArr).size()) {
			return inputArr;
		}
		throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.NO_DUPLICATE);
	}
	static checkNumberRange(inputArr) {
		let max = 0;
		const sortedNumArr = inputArr.map((item) => Number(item)).sort((a, b) => a - b);
		sortedNumArr.forEach((number) => {
			if (number >= max) {
				max = number;
				return max;
			}
			if ((max > POSSIBLE_MAX_NUMBER) | (sortedNumArr[0] < POSSIBLE_MIN_NUMBER)) {
				throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.OK_INPUT);
			}
		});
		return sortedNumArr;
	}
}

export default Validator;
