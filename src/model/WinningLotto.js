import { Console } from "@woowacourse/mission-utils";
import {
	validateNumber,
	validateRange,
	validateNumberLength,
	validateDuplicate,
	validateInWinnerNumber,
} from "../utils/validation.js";

class WinningLotto {
	#winningNumbers;
	#bonusNumber;

	constructor(numbers) {
		numbers = numbers.map((number) => parseInt(number));
		this.#validateInputNumber(numbers);
		this.#winningNumbers = numbers;
	}
	#validateInputNumber(numbers) {
		// 각 번호가 유효한 지 검사
		numbers.forEach((number) => {
			validateNumber(number);
			validateRange(number);
		});

		// numbers 전체가 유효한 지 검사
		validateNumberLength(numbers);
		validateDuplicate(numbers);
	}
	getWinningNumbers() {
		return this.#winningNumbers;
	}
	getBonusNumber() {
		return this.#bonusNumber;
	}
	setBonusNumber(number) {
		this.#validateInputBonusNumber(number);
		this.#bonusNumber = number;
	}
	#validateInputBonusNumber(number) {
		validateInWinnerNumber(number, this.#winningNumbers);
		validateNumber(number);
		validateRange(number);
	}
}

export default WinningLotto;
