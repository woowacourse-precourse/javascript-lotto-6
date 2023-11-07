import { Console } from '@woowacourse/mission-utils';
import { INPUT_VIEW_MESSAGE } from '../constants/viewMessage.js';

class InputView {
	static async inputPurchaseAmountAsync() {
		return await Console.readLineAsync(INPUT_VIEW_MESSAGE.purchaseAmount);
	}

	static async inputWinningNumbersAsync() {
		return await Console.readLineAsync(INPUT_VIEW_MESSAGE.winningNumbers);
	}

	static async inputBonusNumberAsync() {
		return await Console.readLineAsync(INPUT_VIEW_MESSAGE.bonusNumber);
	}
}

export default InputView;