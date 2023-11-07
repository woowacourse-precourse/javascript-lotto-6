import { Random } from '@woowacourse/mission-utils';
import { LOTTO_CONSTANTS } from '../Constants/LottoContstants.js';

class Computer {
	static getRandomNumber = () => {
		return Random.pickNumberInRange(LOTTO_CONSTANTS.minLottoNumber, LOTTO_CONSTANTS.maxLottoNumber);
	};
}

export default Computer;
