class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.some((e) => e < 1 || e > 45)) {
			throw new Error('[ERROR] 로또 번호는 1~45 사이의 숫자여야 합니다.');
		} else if (numbers.length !== 6) {
			throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
		} else if (new Set(numbers).size !== numbers.length) {
			throw new Error('[ERROR] 로또 번호는 중복되지 않는 숫자들로 구성되어야 합니다.');
		}
		numbers.forEach((number) => {
			if (Number.isNaN(number) || number < 0 || !Number.isInteger(number)) {
				throw new Error(`[ERROR] 로또 번호는 자연수여야 합니다.`);
			}
		});
		this.#numbers = numbers;
	}

	// TODO: 추가 기능 구현
	getNumbers() {
		return this.#numbers;
	}

	getResult(issuedLotteries = [], bonusNumber = 0) {
		const numbersSet = new Set(this.#numbers);
		const REWARDS = [5000, 50000, 1500000, 30000000, 2000000000];
		const result = Object.fromEntries(REWARDS.map((e) => [e, 0]));
		issuedLotteries.forEach((issuedLotteryNumbers) => {
			const matchNumbersLength = issuedLotteryNumbers.filter((e) => numbersSet.has(e)).length;
			if (matchNumbersLength === 3) result[5000] += 1;
			else if (matchNumbersLength === 4) result[50000] += 1;
			else if (matchNumbersLength === 5) result[!numbersSet.has(bonusNumber) ? 1500000 : 30000000] += 1;
			else if (matchNumbersLength === 6) result[2000000000] += 1;
		});
		return result;
	}
}

export default Lotto;
