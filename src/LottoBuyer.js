import { Random } from '@woowacourse/mission-utils';
import lottoNumber from './constants/lottoNumber.js';
import Lotto from './Lotto.js';

class LottoBuyer {
	#lottoList;

	constructor(purchaseAmount) {
		this.#lottoList = this.#buyLotto(purchaseAmount);
	}

	#buyLotto(purchaseAmount) {
		const lottoTicketCount = Number.parseInt(purchaseAmount/1000);
		return Array.from({ length: lottoTicketCount }, () => {
			const pickedNumberList = Random.pickUniqueNumbersInRange(lottoNumber.firstNumber, lottoNumber.lastNumber, lottoNumber.totalCount).sort((a, b) => a - b);
			return new Lotto(pickedNumberList);
		});
	}
}

export default LottoBuyer;