import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constants/messages.js';

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
	isNull(input) {
		if (input == '') {
			throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isNull}`);
		}
	},
	isNotInteger(input) {
		if (!Number.isInteger(input)) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isNotInteger}`);
		}
	},
	isUnproperUnits(input) {
		if (input % 1000 !== 0) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isUnproperUnits}`);
		}
	},
	isTooLittleAmount(input) {
		if (input < 1000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isTooLittleAmount}`);
		}
	},
	isTooMuchAmount(input) {
		if (input > 2000000000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isTooMuchAmount}`);
		}
	},
};
