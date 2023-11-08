import Validator from './Validator';
class Lotto {
	#numbers;
	constructor(arr) {
		const numbers = Validator.validateArr(arr);
		this.#numbers = this.#sortNumbers(numbers);
	}
	#sortNumbers(numbers) {
		numbers.sort((a, b) => a - b);
	}
	getNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
