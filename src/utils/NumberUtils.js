import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../constants.js';

export const numberUtils = {
	numberGenerator() {
		const numbers = Random.pickUniqueNumbersInRange(LOTTO.MIN, LOTTO.MAX, LOTTO.LENGTH);
		this.sortNumber(numbers);
		return numbers;
	},
	sortNumber(numbers) {
		numbers.sort((a, b) => a - b);
	},
};
