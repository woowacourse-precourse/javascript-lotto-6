import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/messages.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#matchNumberValidator(numbers);
		this.#numbers = numbers;
		this.bonusNumber;
	}

	#matchNumberValidator(numbers) {
		numbers.forEach((number) => {
			this.isNull(number);
			this.isOutOfRange(number);
			this.isNotInteger(number);
		});

		this.isUnvalidCount(numbers);
		this.isDuplicateNumber(numbers);
		return true;
	}

	isNull(input) {
		if (input == '') {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isNull}`);
		}
	}
	isNotInteger(input) {
		if (!Number.isInteger(input)) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isNotInteger}`);
		}
	}
	isUnproperUnits(input) {
		if (input % 1000 !== 0) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isUnproperUnits}`);
		}
	}
	isTooLittleAmount(input) {
		if (input < 1000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isTooLittleAmount}`);
		}
	}
	isTooMuchAmount(input) {
		if (input > 2000000000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isTooMuchAmount}`);
		}
	}
	isOutOfRange(input) {
		if (input < 1 || input > 45) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isOutOfRange}`);
		}
	}
	isUnvalidCount(input) {
		if (input.length !== INPUT_MESSAGE.RANDOM_COUNT) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isUnvalidCount}`);
		}
	}
	isDuplicateNumber(input) {
		let numbers = new Set(input);

		if (input.length != numbers.size) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isDuplicateNumber}`);
		}
	}

	getNumbers() {
		return this.#numbers;
	}

	getBonusNumber() {
		return this.bonusNumber;
	}

	setBonusNumber(number) {
		this.bonusNumber = number;
	}
}

export default Lotto;
