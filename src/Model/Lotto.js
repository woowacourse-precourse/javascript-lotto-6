import { Console } from '@woowacourse/mission-utils';

class Lotto {
	#numbers;
	#bonusNumber;
	#MatchingStatics;

	constructor(numbers) {
		// this.#validate(numbers);
		this.#numbers = numbers;
	}

	getNumbers() {
		return this.#numbers;
	}

	setBonusNumber(number) {
		this.#bonusNumber = number;
	}
}

export default Lotto;
