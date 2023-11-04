import {
	ONE_LOTTO_PRICE,
	TYPE_LOTTO,
	TYPE_BONUS,
	MONEY_ERROR,
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
	static validateMoney(money) {
		if ((money = '')) {
			throw new LottoError(MONEY_ERROR.name, MONEY_ERROR.message.NO_INPUT + MONEY_ERROR.message.NO_DIVIDE_THOUSAND);
		}
		if (money < ONE_LOTTO_PRICE) {
			throw new LottoError(MONEY_ERROR.name, MONEY_ERROR.message.MORE_MONEY);
		}
		if (money / ONE_LOTTO_PRICE !== 0) {
			throw new LottoError(MONEY_ERROR.name, MONEY_ERROR.message.NO_DIVIDE_THOUSAND);
		}
		return money;
	}
	
	static validateNumbers(input, type) {
		const inputArr = this.checkInputLength(input)
			.checkIfBlankExists(input)
			.checkIfCharsExists(input, type)
			.checkIfDuplicateExists(input);
		return this.checkNumbersRange(inputArr,type);
	}

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

	static checkIfCharsExists(input, type) {
		const reg1 = new RegExp(REG_EXP);
		const reg2 = new RegExp(REG_EXP_EXCEPT_COMMA);
		switch (type) {
			case TYPE_LOTTO:
				if (input.match(reg1)) {
					throw new LottoError(LOTTO_ERROR.name, LOTTO_ERROR.message.NO_CHARS);
				}
				break;
			case TYPE_BONUS:
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

	static checkNumbersRange(inputArr) {
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
