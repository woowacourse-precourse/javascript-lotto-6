import { Console } from '@woowacourse/mission-utils';
import viewMessage from '../constants/viewMessage.js';

class InputView {
	static async inputPurchaseAmountAsync() {
		return await Console.readLineAsync(viewMessage.INPUT_PURCHASE_AMOUNT);
	}

	static async inputWinningNumbersAsync() {
		return await Console.readLineAsync(viewMessage.INPUT_WINNING_NUMBERS);
	}

	static async inputBonusNumberAsync() {
		return await Console.readLineAsync(viewMessage.INPUT_BONUS_NUMBER);
	}
}

export default InputView;