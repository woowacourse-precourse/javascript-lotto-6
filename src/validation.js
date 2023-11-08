import { Console } from '@woowacourse/mission-utils';
import { ERROR } from './constants.js';

export const validation = {
	buy(payment) {
		if (payment % 1000 !== 0) {
			Console.print(ERROR.OUT_OF_MONEY);
			return false;
		}
		if (payment === 0) {
			Console.print(ERROR.NOTING);
			return false;
		}
		if (isNaN(payment)) {
			Console.print(ERROR.NOT_NUMBER);
			return false;
		}
		if (payment < 0) {
			Console.print(ERROR.NEGATIVE);
			return false;
		}
		return true;
	},
	winningNumber(winningNumbers) {
		if (winningNumbers.length !== 6) {
			Console.print(ERROR.NOT_SIX_LENGTH);
			return false;
		}
		winningNumbers.forEach((num) => {
			if (num < 0 || num > 45) {
				Console.print(ERROR.OUT_OF_LIMIT);
				return false;
			}
			if (isNaN(num)) {
				Console.print(ERROR.NOT_NUMBER);
				return false;
			}
		});
		const tmp = new Set(winningNumbers);
		if (tmp.size !== winningNumbers.length) {
			Console.print(ERROR.DUPLICATE);
			return false;
		}
		return true;
	},
	bonusNumber(bonusNumber, winningNumbers) {
		if (bonusNumber < 0 || bonusNumber === 0) {
			Console.print(ERROR.NEGATIVE);
			return false;
		}
		if (bonusNumber > 45) {
			Console.print(ERROR.OUT_OF_LIMIT);
			return false;
		}
		if (isNaN(bonusNumber)) {
			Console.print(ERROR.NOT_NUMBER);
			return false;
		}
		if (winningNumbers.includes(bonusNumber)) {
			Console.print(ERROR.DUPLICATE);
			return false;
		}
		return true;
	},
};
