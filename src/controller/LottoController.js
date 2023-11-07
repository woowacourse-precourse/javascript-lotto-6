import { Random } from "@woowacourse/mission-utils";
import { LOTTO, COMMA } from "../utils/Constant.js";
import Lotto from "../model/Lotto.js";

class LottoController {
	static lottoList = [];

	static countLottos(amount) {
		return Math.floor(amount / LOTTO.cost);
	}

	static generateLotto() {
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

	static setLottoList(lotto) {
		this.lottoList.push(new Lotto(lotto.join(COMMA)));
	}
}

export default LottoController;
