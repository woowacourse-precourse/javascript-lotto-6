import { ERROR } from './constants.js';

export const validation = {
	buy(price) {
		if (price % 1000 !== 0) {
			throw new Error(ERROR.OUT_OF_MONEY);
		}
	},
};
