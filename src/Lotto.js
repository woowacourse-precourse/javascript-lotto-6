import { Random } from '@woowacourse/mission-utils';
import Validator from './Validator';
import {
	ONE_LOTTO_PRICE,
	POSSIBLE_MIN_NUMBER,
	POSSIBLE_MAX_NUMBER,
	LOTTO_NUMBERS_LENGTH
} from './constants';
class Lotto {
	#numbers;
	constructor(numbers) {
		this.#validate(numbers);
		this.#numbers = numbers; //number[]
		this.money;
		this.bonus; //number
		this.randomArraySet;
	}
	#validate(numbers) {
		if (numbers.length !== 6) {
			throw new CustomError(ERROR.name, '로또 번호는 6개여야 합니다.');
		}
		Validator.validate();
	}
	static calculateLottosAmount(money) {
		const amount = Math.floor(money / ONE_LOTTO_PRICE);
		return amount;
	}
	static async makeNumbersArray() {
		const array = await Random.pickUniqueNumbersInRange(
			POSSIBLE_MIN_NUMBER,
			POSSIBLE_MAX_NUMBER,
			LOTTO_NUMBERS_LENGTH
		); // return []
		return array;
	}
}

export default Lotto;
