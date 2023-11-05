import { Console } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../constants/messages.js';

export const validator = {
	purchaseAmountValidator(amount) {
		try {
			if (!Number.isInteger(amount)) {
				throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isNotInteger}`);
			} else if (amount % 1000 !== 0) {
				throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isUnproperUnits}`);
			} else if (amount > 2000000000) {
				throw new Error(`${ERROR_MESSAGE.commonMessage} : ${ERROR_MESSAGE.isTooMuchAmount}`);
			}
			return true;
		} catch (error) {
			Console.print(error.message);
		}
	},
};
