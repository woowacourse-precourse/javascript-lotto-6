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

	async #winningNumber(question = SYSTEM_MESSAGES.input_winning_numbers) {
		const userInput = await Console.readLineAsync(question);
		const splittedInput = userInput.split(',').map((input) => input.trim());

		return splittedInput;
	}

	async #winningBonusNumber(question = SYSTEM_MESSAGES.input_bonus_number) {
		const userInput = await Console.readLineAsync(question);

		if (typeof userInput === 'number') return userInput;

		const trimmedInput = userInput.trim();

		return trimmedInput;
	}

	async lottoWinningNumber() {
		const winningNumber = await this.#winningNumber();
		validators.checkLottoNumbers(winningNumber);

		const winningBonusNumber = await this.#winningBonusNumber();
		validators.checkWinningBonusNumber(winningNumber, winningBonusNumber);

		return { winningNumber, winningBonusNumber };
	}
}

export default UserInput;
