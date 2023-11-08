import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import {
	LOTTO_NUMBERS_CEIL,
	LOTTO_NUMBERS_CNT,
	LOTTO_NUMBERS_FLOOR,
	LOTTO_PRICE,
} from './constant.js';

class LottoList {
	#lottoList = [];

	constructor(budget) {
		this.#initializeLottoList(budget);
	}

	getLottoList() {
		return this.#lottoList;
	}

	#initializeLottoList(budget) {
		const lottoCnt = LottoList.countLottoToPurchase(budget);
		this.#generateLottoList(lottoCnt);
	}

	#generateLottoList(lottoCnt) {
		for (let i = 0; i < lottoCnt; i += 1) {
			const newLotto = LottoList.generateLotto();
			this.#lottoList.push(newLotto);
		}
	}

	static generateLotto() {
		const randomNumbers = Random.pickUniqueNumbersInRange(
			LOTTO_NUMBERS_FLOOR,
			LOTTO_NUMBERS_CEIL,
			LOTTO_NUMBERS_CNT,
		);
		const lotto = new Lotto(randomNumbers);

		return lotto;
	}

	static countLottoToPurchase(budgetStr) {
		const budget = budgetStr * 1;

		return budget / LOTTO_PRICE;
	}
}
export default LottoList;
