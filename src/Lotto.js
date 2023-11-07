import { isVaildLottoNumbers } from "./utils/checkValidation.js";

class Lotto {
	#numbers;

	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers;
	}

	#validate(numbers) {
		if (!isVaildLottoNumbers(numbers.split(","))) throw new Error();
	}

	getNumbers() {
		return this.#numbers.split(",");
	}
}

export default Lotto;
