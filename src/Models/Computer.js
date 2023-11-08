import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONSTANTS } from '../Constants/LottoContstants.js';

class Computer {
	static getRandomNumbers = (length) => {
		const randomNumbers = Random.pickUniqueNumbersInRange(
			LOTTO_CONSTANTS.minLottoNumber,
			LOTTO_CONSTANTS.maxLottoNumber,
			length,
		);

		const sortedNumbers = randomNumbers.sort((a, b) => a - b);

		return sortedNumbers;
	};
}

export default Computer;
