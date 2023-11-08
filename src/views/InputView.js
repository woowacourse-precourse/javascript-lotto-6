import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants.js';

class InputView {
	static async getPayment() {
		const payment = await Console.readLineAsync(MESSAGE.PRICE);
		return payment;
	}
	static async getWinningNumber() {
		const winningNumber = await Console.readLineAsync(MESSAGE.WINNING);
		return winningNumber;
	}
	static async getBonusNumber() {
		const bonusNumber = await Console.readLineAsync(MESSAGE.BONUS);
		return bonusNumber;
	}
}

export default InputView;
