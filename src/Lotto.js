import { ERROR } from './constants.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error(ERROR.NOT_SIX_LENGTH);
		}
		numbers.forEach((num) => {
			if (num < 0 || num > 45) {
				throw new Error(ERROR.OUT_OF_LIMIT);
			}
			if (isNaN(num)) {
				throw new Error(ERROR.NOT_NUMBER);
			}
		});
		const tmp = new Set(numbers);
		if (tmp.size !== numbers.length) {
			throw new Error(ERROR.DUPLICATE);
		}
	}
}

export default Lotto;
