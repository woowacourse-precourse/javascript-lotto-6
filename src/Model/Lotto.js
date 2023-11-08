class Lotto {
	#numbers;

	constructor(numbers) {
		this.#numbers = numbers;
		this.bonusNumber;
	}

	getNumbers() {
		return this.#numbers;
	}

	getBonusNumber() {
		return this.bonusNumber;
	}

	setBonusNumber(number) {
		this.bonusNumber = number;
	}
}

export default Lotto;
