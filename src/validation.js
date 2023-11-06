import { ERROR } from './constants.js';

export const validation = {
	buy(price) {
		if (price % 1000 !== 0) {
			throw new Error(ERROR.OUT_OF_MONEY);
		}
	},
	duplicateLottoNumber(lottos) {
		let tmp = [];
		lottos.forEach((lotto) => {
			tmp = new Set(lotto);
			if (tmp.size !== lotto.length) {
				throw new Error('[ERROR]');
			}
		});
	},
};
