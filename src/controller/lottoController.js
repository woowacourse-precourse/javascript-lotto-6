import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../utils/Constant.js";
import Lotto from "../model/Lotto.js";

const countLottos = (amount) => Math.floor(amount / LOTTO.cost);

const generateLotto = () => {
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
	return lottoNumbers.sort((a, b) => a - b).join(",");
};

const generateLottoList = (lotto) => {
	const LottoList = [];
	LottoList.push(new Lotto(lotto));
	return LottoList;
};

export { countLottos, generateLotto, generateLottoList };
