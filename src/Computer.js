import { Console, Random } from '@woowacourse/mission-utils';
import {
	POSSIBLE_MIN_NUMBER,
	POSSIBLE_MAX_NUMBER,
	LOTTO_NUMBER_LENGTH,
	ONE_LOTTO_PRICE,
	TYPE_LOTTO,
	THREE_EQUAL,
	FOUR_EQUAL,
	FIVE_EQUAL,
	FIVE_AND_BONUS_EQUAL,
	SIX_EQUAL,
} from './constants';
import Validator from './Validator';

class Computer {
	async getInput(string, type) {
		const input = await Console.readLineAsync(string);
		if (type === TYPE_LOTTO) {
			await Console.print(...input);
		} else {
			await Console.print(input);
		}
		return input;
	}
	async getRandomSixNumbers() {
		const array = await Random.pickUniqueNumbersInRange(POSSIBLE_MIN_NUMBER, POSSIBLE_MAX_NUMBER, LOTTO_NUMBER_LENGTH); // return []
		return array;
	}
	calculateHowManyLottos(money) {
		if (Validator.validateMoney(money)) {
			const amount = Math.floor(money / ONE_LOTTO_PRICE);
			return amount;
		}
	}
	async printHowManySameNumber(number1, number2 = 0) {
		switch (number1) {
			case 3:
				await Console.print(THREE_EQUAL + number2 + UNIT_GAE);
				break;
			case 4:
				await Console.print(FOUR_EQUAL + number2 + UNIT_GAE);
				break;
			case 5:
				await Console.print(FIVE_EQUAL + number2 + UNIT_GAE);
				break;
			case 51:
				await Console.print(FIVE_AND_BONUS_EQUAL + number2 + UNIT_GAE);
				break;
			case 6:
				await Console.print(SIX_EQUAL + number2 + UNIT_GAE);
				break;
		}
	}
	compareLottoArrays() {}
	calculateProfitsRate() {}
}

export default Computer;
