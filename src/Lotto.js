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

	compareWithWinningNumbers(winningNumber, winningBonusNumber) {
		const winningCount = winningNumber.filter((number) => this.#numbers.includes(number)).length;
		const bonusNumberHit = this.#numbers.includes(winningBonusNumber);

		return { winningCount, bonusNumberHit };
	}
}

export default Lotto;
