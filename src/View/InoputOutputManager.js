import { Console } from '@woowacourse/mission-utils';

class InputOutputManager {
	static async getUserInput(message, validateFunction) {
		let userInput;
		do {
			try {
				userInput = await Console.readLineAsync(message);

				if (validateFunction(userInput)) {
					break;
				}
			} catch (error) {
				Console.print(error.message);
			}
		} while (true);

		return userInput;
	}

	static printMessage(message) {
		Console.print(message);
	}
}

export default InputOutputManager;
