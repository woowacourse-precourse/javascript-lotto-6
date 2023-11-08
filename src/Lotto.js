import VarificationManager from './Models/VarificationManager.js';

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		VarificationManager.checkLottoNumber(numbers);
	}

	// getFunction
	get numbers() {
		return this.#numbers;
	}
}

export default Lotto;
