class Lotto	{
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
		}
		if (numbers.length !== (new Set(numbers)).size) {
			throw new Error("[ERROR] 중복되지 않은 6개의 숫자를 입력해야 합니다.");
		}
	}

	getNumberArray() {
		return this.#numbers;
	}
}

export default Lotto;