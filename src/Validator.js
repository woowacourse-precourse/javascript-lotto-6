
class Validator {
	constructor() {}
	static validate(input, type) {
		const array = input.split(',');
		const numbers = array.map(number => +number);
		Validator.checkInputLength(numbers, type);
		Validator.checkIfBlankExists(input);
		Validator.checkIfCharsExists(input, type);
		Validator.checkNumbersRange(numbers);
		if (type === TYPE_LOTTO) {
			Validator.checkIfDuplicateExists(numbers);
		}
		return numbers;
	}

	static checkInputLength(numbers, type) {
		if (numbers.length === 1 && numbers[0] === EMPTY) {
			throw new Error(LOTTO_ERROR.message.NO_INPUT);
		}
		if (type === TYPE_LOTTO) {
			if (numbers.length !== 6) {
				throw new Error(LOTTO_ERROR.message.LENGTH);
			}
		}
	}

	static checkIfBlankExists = input => {
		if (input.match(' ')) {
			throw new Error(LOTTO_ERROR.message.NO_BLANK);
		}
		return input;
	};

	static checkIfCharsExists(input, type) {
		const reg1 = new RegExp(REG_EXP);
		const reg2 = new RegExp(REG_EXP_EXCEPT_COMMA);

		if (type === TYPE_LOTTO) {
			if (input.match(reg1)) {
				throw new Error(LOTTO_ERROR.message.NO_CHARS);
			}
		}
		if (input.match(reg2)) {
			throw new Error(BONUS_ERROR.message.NO_CHARS);
		}
		return input;
	}

	static checkIfDuplicateExists(numbers) {
		if (numbers.length !== new Set(numbers).size()) {
			throw new Error(LOTTO_ERROR.message.NO_DUPLICATE);
		}
	}

	static checkNumbersRange(numbers, type) {
		if ((type === TYPE_LOTTO) | TYPE_BONUS) {
			let max = 0;
			const sortedNumArr = numbers.sort((a, b) => a - b);
			sortedNumArr.forEach(number => {
				if (number >= max) {
					max = number;
					return max;
				}
				if (
					(max > POSSIBLE_MAX_NUMBER) |
					(sortedNumArr[0] < POSSIBLE_MIN_NUMBER)
				) {
					throw new Error(LOTTO_ERROR.message.OK_INPUT);
				}
			});
			return sortedNumArr;
		}
		if (type === TYPE_MONEY) {
			const money = +numbers[0];
			if (money < ONE_LOTTO_PRICE) {
				throw new Error(MONEY_ERROR.message.MORE_MONEY);
			}
			if (money / ONE_LOTTO_PRICE !== 0) {
				throw new Error(MONEY_ERROR.message.NO_DIVIDE_THOUSAND);
			}
			return money;
		}
	}
}

export default Validator;
