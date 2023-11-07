import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/messages.js';

export const validator = {
	purchaseAmountValidator(amount) {
		try {
			this.isNull(amount);
			this.isNotInteger(amount);
			this.isUnproperUnits(amount);
			this.isTooLittleAmount(amount);
			this.isTooMuchAmount(amount);
			return true;
		} catch (error) {
			Console.print(error.message);
		}
	},
	matchNumberValidator(numbers) {
		try {
			numbers.forEach((number) => {
				this.isNull(number);
				this.isOutOfRange(number);
				this.isNotInteger(number);
			});

			this.isUnvalidCount(numbers);
			this.isDuplicateNumber(numbers);
			return true;
		} catch (error) {
			Console.print(error.message);
		}
	},
	bonusNumberValidator(numbers, bonusNumber) {
		const concatArray = numbers.concat(bonusNumber);

		try {
			this.isNull(bonusNumber);
			this.isOutOfRange(bonusNumber);
			this.isNotInteger(bonusNumber);
			this.isDuplicateNumber(concatArray);
			return true;
		} catch (error) {
			Console.print(error.message);
		}
	},

	isNull(input) {
		if (input == '') {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isNull}`);
		}
	},
	isNotInteger(input) {
		if (!Number.isInteger(input)) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isNotInteger}`);
		}
	},
	isUnproperUnits(input) {
		if (input % 1000 !== 0) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isUnproperUnits}`);
		}
	},
	isTooLittleAmount(input) {
		if (input < 1000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isTooLittleAmount}`);
		}
	},
	isTooMuchAmount(input) {
		if (input > 2000000000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isTooMuchAmount}`);
		}
	},
	isOutOfRange(input) {
		if (input < 1 || input > 45) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isOutOfRange}`);
		}
	},
	isUnvalidCount(input) {
		if (input.length !== INPUT_MESSAGE.RANDOM_COUNT) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isUnvalidCount}`);
		}
	},
	isDuplicateNumber(input) {
		let numbers = new Set(input);

		if (input.length != numbers.size) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isDuplicateNumber}`);
		}
	},
};
