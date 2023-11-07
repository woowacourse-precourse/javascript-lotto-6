import { Random } from '@woowacourse/mission-utils';
import lottoNumber from './constants/lottoNumber.js';
import Lotto from './Lotto.js';
import CheckLotto from './util/CheckLotto.js';

class LottoBuyer {
	#lottoArray;
	#purchaseAmount;

	constructor(purchaseAmount) {
		this.#purchaseAmount = purchaseAmount;
		this.#lottoArray = this.#buyLotto(purchaseAmount);
	}

	#buyLotto(purchaseAmount) {
		const lottoTicketCount = Number.parseInt(purchaseAmount/1000);
		return Array.from({ length: lottoTicketCount }, () => {
			const pickedNumberArray = Random.pickUniqueNumbersInRange(lottoNumber.firstNumber, lottoNumber.lastNumber, lottoNumber.totalCount).sort((a, b) => a - b);
			return new Lotto(pickedNumberArray);
		});
	}

	checkResult(winningNumberArray, bonusNumber) {
		const lottoResult = {
			firstPlaceCount: 0,
			secondPlaceCount: 0,
			thirdPlaceCount: 0,
			fourthPlaceCount: 0,
			fifthPlaceCount: 0,
		};

		this.#lottoArray.forEach((lotto) => {
			lottoResult.firstPlaceCount += CheckLotto.firstPlace(lotto.getNumberArray(), winningNumberArray) ? 1 : 0;
			lottoResult.secondPlaceCount += CheckLotto.secondPlace(lotto.getNumberArray(), winningNumberArray, bonusNumber) ? 1 : 0;
			lottoResult.thirdPlaceCount += CheckLotto.thirdPlace(lotto.getNumberArray(), winningNumberArray, bonusNumber) ? 1 : 0;
			lottoResult.fourthPlaceCount += CheckLotto.fourthPlace(lotto.getNumberArray(), winningNumberArray) ? 1 : 0;
			lottoResult.fifthPlaceCount += CheckLotto.fifthPlace(lotto.getNumberArray(), winningNumberArray) ? 1 : 0;
		});

		return lottoResult;
	}

	getAllLottoNumberArray() {
		return this.#lottoArray.map(lotto => {
			return lotto.getNumberArray();
		});
	}

	getPurchaseAmount() {
		return this.#purchaseAmount;
	}
}

export default LottoBuyer;