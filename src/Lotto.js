import { Random, Console } from '@woowacourse/mission-utils';
import { validateDuplicate, validateLength, validateIsInteger, validateRange } from './Validator';
import { LOTTO } from './constants';
class Lotto {
	#numbers;
	constructor(numbers) {
		this.#numbers = this.#validateArr(numbers);
	}
	#validateArr(arr) {
		validateLength(arr);
		arr.forEach((item) => validateIsInteger(+item));
		arr.forEach((item) => validateRange(+item));
		validateDuplicate(arr);
		return arr;
	}
	static createRandomArrayMap(amount) {
		const map = new Map();
		for (let i = 0; i < amount; i += 1) {
			const numbersArr = Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.LENGTH);
			Console.print(numbersArr);
			map.set(i, numbersArr);
		}
		return map;
	}
	static getLottosAmount(money) {
		return money / LOTTO.PRICE;
	}
	getNumbers() {
		return this.#numbers;
	}
}

export default Lotto;
