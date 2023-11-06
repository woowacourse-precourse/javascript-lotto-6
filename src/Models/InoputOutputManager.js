import { Console } from '@woowacourse/mission-utils';

class InputOutputManager {
	static async getUserInput(message, validateFunction) {
		const userInput = await Console.readLineAsync(message);

		validateFunction(userInput);

		return userInput;
	}

	static printMessage(message) {
		Console.print(message);
	}
}

export default InputOutputManager;
