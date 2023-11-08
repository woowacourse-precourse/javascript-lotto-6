class Lotto {
	#numbers; // array

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
		this.#sortNumbers();
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}

		const isDuplicated = !this.#checkHasNoDup(numbers);
		if (isDuplicated) {
			throw new Error('[ERROR] 로또 번호는 중복되지 않아야 합니다.');
		}
	}

	// TODO: 추가 기능 구현
	#checkHasNoDup(arr) {
		const set = new Set(arr);

		return set.size === arr.length;
	}

	#sortNumbers() {
		this.#numbers = this.#numbers.sort((a, b) => a - b);
	}

	getLottoNumber() {
		return this.#numbers;
	}
}

export default Lotto;
