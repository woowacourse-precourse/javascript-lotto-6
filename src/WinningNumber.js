import checkValue from "./libs/checkValue.js";
import exitWithError from "./libs/error.js";
import { WINNING_NUMBER } from "./libs/constants.js";

class WinningNumbers {
	constructor(numbers) {
		this.validate(numbers);
		this.value = numbers;
	}

	validate(numbers) {
		const { errorMsg } = checkValue.numbers(numbers, WINNING_NUMBER);

		if (errorMsg) exitWithError(errorMsg);
	}
}

export default WinningNumbers;
