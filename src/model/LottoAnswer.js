import Lotto from './Lotto';
import { LOTTO_SETTINGS } from '../constant/LOTTO_SETTINGS';
import { ERROR_MESSAGE } from '../constant/ERROR_MESSAGE';

export default class LottoAnswer extends Lotto {
	#bonusNumber;

	constructor(numbers) {
		const inputNumbers = numbers.split(",").map((element) => element.trim());
		super(inputNumbers.map(Number));
	}

	#validateRangeBonusNumber(bonusNumber) {
		if (
			LOTTO_SETTINGS.LOTTO_MIN_NUMBER > bonusNumber ||
      bonusNumber > LOTTO_SETTINGS.LOTTO_MAX_NUMBER
			) throw new Error(ERROR_MESSAGE.OUT_OF_RANGE);
	}

	#validateDuplicateBonusNumber(bonusNumber) {
		if (this.getLottoNumber().includes(bonusNumber)) {
			throw new Error(ERROR_MESSAGE.LOTTO_DUPLICATE_ERROR);
		}
	}

	#validateOverLength(bonusNumber) {
		if (bonusNumber.length !== LOTTO_SETTINGS.BONUS_NUMBER_LENGTH) {
			throw new Error(ERROR_MESSAGE.BONUS_LENGTH_ERROR);
		}
  }

	#validateBonusNumber(bonusNumber) {
		const number = bonusNumber;
		this.#validateRangeBonusNumber(number);
		this.#validateDuplicateBonusNumber(number);
		this.#validateOverLength(number);

		return Number(number);
	}

	setBonusNumber(bonusNumber) {
		this.#bonusNumber = this.#validateBonusNumber(bonusNumber);
	}

	getBonusNumber() {
		return this.#bonusNumber;
	}

	getFullNumber() {
		const answerNumber = this.getLottoNumber();
		const bonusNumber = this.getBonusNumber();
		return { answerNumber, bonusNumber };
	}
}