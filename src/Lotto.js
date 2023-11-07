class Lotto {
	#numbers;
	#LOTTO_LENGH = 6;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		this.#validateNumberQuantity(numbers);
		this.#validateNumberRange(numbers);
		this.#validateNumberRange(numbers);
		this.#validateNumberDuplicate(numbers);
	}

	#validateNumberQuantity(numbers) {
		if (numbers.length !== this.#LOTTO_LENGH) {
			throw new Error('[ERROR] 로또 번호는 6개의 숫자를 입력해야 합니다.');
		}
	}

	#validateNumberRange(numbers) {
		const REGEX = /^(?:[1-9]|[1-3][0-9]|4[0-5])$/;
		const filterNumber = numbers.filter((num) => REGEX.test(num));
		if (filterNumber.length !== this.#LOTTO_LENGH) {
			throw new Error('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
		}
	}

	#validateNumberDuplicate(numbers) {
		const duplicateNumber = new Set(numbers);
		if (duplicateNumber.size !== this.#LOTTO_LENGH) {
			throw new Error('[ERROR] 로또 번호는 중복된 숫자를 입력할 수 없습니다.');
		}
	}
}

export default Lotto;
