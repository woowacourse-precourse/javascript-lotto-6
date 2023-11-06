import { ERROR_MESSAGE } from "./utils/Constant.js";

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error(ERROR_MESSAGE.numbersMustBeSix);
		}
	}
}

export default Lotto;
