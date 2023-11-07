class Lotto {
	#numbers;
	#bonusNumber;
	#matchingStatics;

	constructor(numbers) {
		this.#numbers = numbers;
	}

	getNumbers() {
		return this.#numbers;
	}

	getBonusNumber() {
		return this.#bonusNumber;
	}

	setBonusNumber(number) {
		this.#bonusNumber = number;
	}

	getMatchingStatics() {
		return this.#matchingStatics;
	}

	setMatchingStatics(count) {
		this.#matchingStatics = count;
	}

	compareMatching(index, lottoNumbers) {
		lottoNumbers.forEach((number) => {
			if (this.#numbers.includes(number)) {
				this.#matchingStatics[index] += 1;
			}
		});
	}

	bonusCompareMatching(index, lottoNumbers) {
		if (lottoNumbers.includes(this.#bonusNumber)) {
			this.#matchingStatics[index] += 1;
		}
	}
}

export default Lotto;
