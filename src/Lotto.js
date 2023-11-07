import { isVaildLottoNumbers } from "./utils/checkValidation.js";
import { LOTTO } from "./utils/Constant.js";

class Lotto {
	#numbers;

	constructor(numbers) {
		if (numbers.length !== LOTTO.count) numbers = numbers.split(",");
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (!isVaildLottoNumbers(numbers)) throw new Error();
	}

	getNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
