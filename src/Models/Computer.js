import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONSTANTS } from '../Constants/LottoContstants.js';

class Computer {
	static getRandomNumbers = (length) => {
		const numbers = [];

		while (numbers.length < length) {
			const randomNumber = Random.pickNumberInRange(
				LOTTO_CONSTANTS.minLottoNumber,
				LOTTO_CONSTANTS.maxLottoNumber,
			);

			if (!numbers.includes(randomNumber)) {
				numbers.push(randomNumber);
			}
		}

		const sortedNumbers = numbers.sort((a, b) => a - b);

		return sortedNumbers;
	};
}

export default Computer;
