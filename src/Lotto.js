import { Random } from "@woowacourse/mission-utils";
import { LOTTO, ERROR_MESSAGE } from "./Constant.js";

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new Error(ERROR_MESSAGE.numbersMustBeSix);
		}
	}

	generateLotto() {
		const lotto = [];
		while (computer.length < LOTTO.count) {
			const number = Random.pickNumberInRange(
				LOTTO.minRange,
				LOTTO.maxRange,
				LOTTO.count
			);
			if (!lotto.includes(number)) {
				lotto.push(number);
			}
		}
		return lotto;
	}
}

export default Lotto;
