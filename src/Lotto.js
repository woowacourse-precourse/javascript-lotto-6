import validators from './utils/validators.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		validators.checkLottoNumbers(numbers);
		this.#numbers = numbers;
	}

	get numbers() {
		return this.#numbers;
	}
}

export default Lotto;
