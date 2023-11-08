import { Console } from "@woowacourse/mission-utils";
import checkValue from "./libs/checkValue.js";
import exitWithError from "./libs/error.js";
import { LOTTO_NUMBER, PLACE } from "./libs/constants.js";

class Lotto {
	#numbers;

	constructor(numbers) {
		this.validate(numbers);
		this.#numbers = numbers;
	}

	validate(numbers) {
		const { errorMsg } = checkValue.numbers(numbers, LOTTO_NUMBER);

		if (errorMsg) exitWithError(errorMsg);
	}

	printNumbers() {
		this.sortNumbers();

		Console.print(`[${this.#numbers.join(", ")}]`);
	}

	sortNumbers() {
		this.#numbers.sort((a, b) => a - b);
	}

	getRank(winningNumbers, bonusNumber) {
		let count = 0;

		this.#numbers.forEach((number) => {
			if (winningNumbers.includes(number)) count += 1;
		});

		if (count === 6) return PLACE.FIRST;

		if (count === 5 && this.#numbers.includes(bonusNumber))
			return PLACE.SECOND;

		return 8 - count;
	}
}
export default Lotto;
