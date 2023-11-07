import { Console } from '@woowacourse/mission-utils';
import SYSTEM_MESSAGES from '../constants/SystemMessages.js';
import validators from '../utils/validators.js';
import PrintConsole from './PrintConsole.js';

class UserInput {
	#printConsole;

	constructor() {
		this.#printConsole = new PrintConsole();
	}

	async lottoPurchase(question = SYSTEM_MESSAGES.input_purchase_amount) {
		try {
			const userInput = await Console.readLineAsync(question);
			const trimmedInput = userInput.trim();
			validators.checkPurchasePrice(trimmedInput);

			return trimmedInput;
		} catch (error) {
			this.#printConsole.print(error.message);
			return this.lottoPurchase();
		}
	}

	async winningNumber(question = SYSTEM_MESSAGES.input_winning_numbers) {
		try {
			const userInput = await Console.readLineAsync(question);
			const splittedInput = userInput.split(',').map((input) => input.trim());
			validators.checkLottoNumbers(splittedInput);

			return splittedInput;
		} catch (error) {
			this.#printConsole.print(error.message);
			return this.winningNumber();
		}
	}

	async winningBonusNumber(winningNumber, question = SYSTEM_MESSAGES.input_bonus_number) {
		try {
			const userInput = await Console.readLineAsync(question);
			const trimmedInput = userInput.trim();

			validators.checkWinningBonusNumber(winningNumber, trimmedInput);

			return trimmedInput;
		} catch (error) {
			this.#printConsole.print(error.message);
			return this.winningBonusNumber(winningNumber);
		}
	}

	async lottoWinningNumber() {
		const winningNumber = await this.winningNumber();

		const winningBonusNumber = await this.winningBonusNumber(winningNumber);

		return { winningNumber, winningBonusNumber };
	}
}

export default UserInput;
