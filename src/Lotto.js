import {
	LOTTO_IS_NOT_SIX_ERROR,
	LOTTO_NUMBER_SAME_ERROR,
	LOTTO_RANGE_ERROR,
} from './Constant.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#deduplicate(numbers);
		this.#rangeCheck(numbers);
		this.#numbers = numbers.sort((a, b) => a - b);
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error(LOTTO_IS_NOT_SIX_ERROR);
		}
	}

	#deduplicate(numbers) {
		if (new Set(numbers).size !== numbers.length) {
			throw new Error(LOTTO_NUMBER_SAME_ERROR);
		}
	}

	#rangeCheck(numbers) {
		if (numbers.some((number) => number < 1 || number > 45)) {
			throw new Error(LOTTO_RANGE_ERROR);
		}
	}

	getNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
