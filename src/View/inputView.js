import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';

const inputView = {
	readPurchaseAmount() {
		return this.getUserInput(INPUT_MESSAGE.purchaseAmount);
	},

	async getUserInput(message) {
		const result = Number(await Console.readLineAsync(`${message}\n`));
		return result;
	},
};

export default inputView;
