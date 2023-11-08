import {
	validateNumber,
	validateRange,
	validateNumberLength,
	validateDuplicate,
} from "./utils/validation.js";
class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		numbers.sort((a, b) => a - b);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		numbers.forEach((number) => {
			validateNumber(number);
			validateRange(number);
		});

		// numbers 전체가 유효한 지 검사
		validateNumberLength(numbers);
		validateDuplicate(numbers);
	}
	getNumber() {
		return this.#numbers;
	}
}

export default Lotto;
