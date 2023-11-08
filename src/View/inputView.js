import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

const inputView = {
	readPurchaseAmount() {
		return this.getUserInput(INPUT_MESSAGE.purchaseAmount);
	},

	readMatchNumbers() {
		return this.getUserInput(INPUT_MESSAGE.matchNumbers);
	},

	readBonusNumber() {
		return this.getUserInput(INPUT_MESSAGE.bonusNumber);
	},

	async getUserInput(message) {
		const result = await Console.readLineAsync(`${message}\n`);
		return result;
	},
};

export default inputView;
