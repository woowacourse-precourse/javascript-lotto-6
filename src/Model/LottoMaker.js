import { Random } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constants/messages.js';
import { validator } from '../validators/validator.js';

class LottoMaker {
	#amount;
	#lottoNumbers;

	constructor(number) {
		validator.purchaseAmountValidator(number);
		this.#amount = number;
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
