import { Random } from "@woowacourse/mission-utils";
import { LOTTO, COMMA } from "../utils/Constant.js";
import Lotto from "../model/Lotto.js";

class LottoController {
	#LottoList;

	constructor() {
		this.#LottoList = [];
	}

	countLottos(amount) {
		return Math.floor(amount / LOTTO.cost);
	}

	generateLotto() {
		const lottoNumbers = [];
		while (lottoNumbers.length < LOTTO.count) {
			const number = Random.pickNumberInRange(
				LOTTO.minRange,
				LOTTO.maxRange,
				LOTTO.count
			);
			if (!lottoNumbers.includes(number)) {
				lottoNumbers.push(number);
			}
		}
		return lottoNumbers.sort((a, b) => a - b);
	}

	setLottoList(lotto) {
		this.#LottoList.push(new Lotto(lotto.join(COMMA)));
	}

	getLottoList() {
		return this.#LottoList;
	}
}
export default LottoController;
