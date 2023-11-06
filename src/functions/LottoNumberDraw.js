import { Random } from "@woowacourse/mission-utils";

class LottoNumberDraw {
	constructor() {
		this.setAnswer();
		this.lotto = [];
	}

	setAnswer() {
		const set = new Set();
		set.add(Random.pickNumberInRange(1, 45, 6),);
		return [...set];
	}
}

export default LottoNumberDraw;