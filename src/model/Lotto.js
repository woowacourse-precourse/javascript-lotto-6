import { isVaildLottoNumbers } from "../utils/checkValidation.js";
import { COMMA } from "../utils/Constant.js";

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (!isVaildLottoNumbers(numbers.split(COMMA))) throw new Error();
	}

	getNumbers() {
		return this.#numbers.split(COMMA);
	}
}

export default Lotto;
