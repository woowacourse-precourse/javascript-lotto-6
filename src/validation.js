import { ERROR } from './constants.js';

export const validation = {
	buy(price) {
		if (price % 1000 !== 0) {
			throw new Error(ERROR.OUT_OF_MONEY);
		}
		if (price === 0) {
			throw new Error(ERROR.NOTING);
		}
		if (isNaN(price)) {
			throw new Error(ERROR.NOT_NUMBER);
		}
		if (price < 0) {
			throw new Error(ERROR.NEGATIVE);
		}
	},
	bonusNumber(bonusNumber, winningNumber) {
		if (bonusNumber < 0 || bonusNumber === 0) {
			throw new Error(ERROR.NEGATIVE);
		}
		if (bonusNumber > 45) {
			throw new Error(ERROR.OUT_OF_LIMIT);
		}
		if (isNaN(bonusNumber)) {
			throw new Error(ERROR.NOT_NUMBER);
		}
		if (winningNumber.includes(bonusNumber)) {
			throw new Error(ERROR.DUPLICATE);
		}
	},
};
