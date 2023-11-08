import { Random } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE, INPUT_MESSAGE } from '../constants/messages.js';
import { validator } from '../validators/validator.js';

class LottoMaker {
	#amount;
	#lottoNumbers;

	constructor(number) {
		this.purchaseAmountValidator(number);
		this.#amount = number;
	}

	purchaseAmountValidator(amount) {
		this.isNull(amount);
		this.isNotInteger(amount);
		this.isUnproperUnits(amount);
		this.isTooLittleAmount(amount);
		this.isTooMuchAmount(amount);
	}

	isNull(input) {
		if (input == '') {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isNull}`);
		}
	}
	isNotInteger(input) {
		if (!Number.isInteger(input)) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isNotInteger}`);
		}
	}
	isUnproperUnits(input) {
		if (input % 1000 !== 0) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isUnproperUnits}`);
		}
	}
	isTooLittleAmount(input) {
		if (input < 1000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isTooLittleAmount}`);
		}
	}
	isTooMuchAmount(input) {
		if (input > 2000000000) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isTooMuchAmount}`);
		}
	}
	isOutOfRange(input) {
		if (input < 1 || input > 45) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isOutOfRange}`);
		}
	}
	isUnvalidCount(input) {
		if (input.length !== INPUT_MESSAGE.RANDOM_COUNT) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isUnvalidCount}`);
		}
	}
	isDuplicateNumber(input) {
		let numbers = new Set(input);

		if (input.length != numbers.size) {
			throw new Error(`${ERROR_MESSAGE.commonMessage} ${ERROR_MESSAGE.isDuplicateNumber}`);
		}
	}

	getAmount() {
		return this.#amount;
	}

	getLottoNumbers() {
		return this.#lottoNumbers;
	}

	makeLotto(amount) {
		const totalLottoNumbers = [];

		for (let i = 0; i < amount; i++) {
			totalLottoNumbers.push(
				Random.pickUniqueNumbersInRange(
					INPUT_MESSAGE.RANDOM_MIN_NUMBER,
					INPUT_MESSAGE.RANDOM_MAX_NUMBER,
					INPUT_MESSAGE.RANDOM_COUNT
				).sort((a, b) => a - b)
			);
		}
		this.#lottoNumbers = totalLottoNumbers;
	}
}
export default LottoMaker;
