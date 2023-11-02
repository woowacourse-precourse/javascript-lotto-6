import { Random } from '@woowacourse/mission-utils';
import lottoNumber from './constants/lottoNumber.js';
import Lotto from './Lotto.js';
import CheckLotto from './util/CheckLotto.js';

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

	checkResult(winningNumberList, bonusNumber) {
		const lottoResult = {
			firstPlaceCount: 0,
			secondPlaceCount: 0,
			thirdPlaceCount: 0,
			fourthPlaceCount: 0,
			fifthPlaceCount: 0,
		};

		this.#lottoList.forEach((lotto) => {
			lottoResult.firstPlaceCount += CheckLotto.firstPlace(lotto.getNumberList(), winningNumberList) ? 1 : 0;
			lottoResult.secondPlaceCount += CheckLotto.secondPlace(lotto.getNumberList(), winningNumberList, bonusNumber) ? 1 : 0;
			lottoResult.thirdPlaceCount += CheckLotto.thirdPlace(lotto.getNumberList(), winningNumberList, bonusNumber) ? 1 : 0;
			lottoResult.fourthPlaceCount += CheckLotto.fourthPlace(lotto.getNumberList(), winningNumberList) ? 1 : 0;
			lottoResult.fifthPlaceCount += CheckLotto.fifthPlace(lotto.getNumberList(), winningNumberList) ? 1 : 0;
		});

		return lottoResult;
	}
}

export default LottoBuyer;