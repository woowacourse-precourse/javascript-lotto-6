import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGES from '../constants/SystemMessages.js';
import validators from '../utils/validators.js';

class UserInput {
	async lottoPurchase(question = SYSTEM_MESSAGES.input_purchase_amount) {
		const userInput = await Console.readLineAsync(question);
		const trimmedInput = userInput.trim();
		validators.checkPurchasePrice(trimmedInput);

		return trimmedInput;
	}

	async winningNumber(question = SYSTEM_MESSAGES.input_winning_numbers) {
		const userInput = await Console.readLineAsync(question);
		const splittedInput = userInput.split(',').map((input) => input.trim());

		validators.checkLottoNumbers(splittedInput);

		return splittedInput;
	}

	async winningBonusNumber(question = SYSTEM_MESSAGES.input_bonus_number) {
		const userInput = await Console.readLineAsync(question);
		const trimmedInput = userInput.trim();
		validators.checkWinningBonusNumber(trimmedInput);

		return trimmedInput;
	}
}

export default UserInput;
