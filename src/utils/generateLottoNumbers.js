import { MissionUtils } from '@woowacourse/mission-utils';
import LOTTO_SYSTEM from '../constants/LottoSystem.js';

const generateLottoNumbers = () => {
	return MissionUtils.Random.pickUniqueNumbersInRange(
		LOTTO_SYSTEM.minimum_number,
		LOTTO_SYSTEM.maximum_number,
		LOTTO_SYSTEM.lotto_numbers
	).sort((a, b) => a - b);
};

export default generateLottoNumbers;
