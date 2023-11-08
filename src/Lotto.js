import LottoMachine from "./LottoMachine.js";
import ValidatorUtil from "../validators/ValidatorUtil.js";

class Lotto {
	#numbers;

	constructor(numbers, bonus) {
		this.#validate(numbers, bonus);
		this.#numbers = numbers;
		this.bonus = bonus;
	}

	#validate(numbers, bonus) {
		ValidatorUtil.isDuplicated(numbers, bonus);
	}

	getResult(userNumbers) {
		const lottoCount = LottoMachine.getPurchasedLottoAmount(
			userNumbers,
			this.#numbers
		);

		const isBonus = null;
		if (lottoCount === 5)
			isBonus = LottoMachine.isBonus(userNumbers, this.bonus);

		return { lottoCount, isBonus };
	}
}

export default Lotto;
