class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers.sort((a, b) => a - b);
		this.#deduplication(numbers);
		this.#range_check(numbers);
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		}
	}

	// TODO: 추가 기능 구현
	#deduplication(numbers) {
		if (new Set(numbers).size !== 6) {
			throw new Error('[ERROR] 로또 번호는 중복되면 안됩니다.');
		}
	}

	#range_check(numbers) {
		if (numbers.find((element) => element < 0 || element > 45)) {
			throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
		}
	}

	getNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
