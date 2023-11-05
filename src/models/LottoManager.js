import generateLottoNumbers from '../utils/generateLottoNumbers.js';
import Lotto from '../Lotto.js';

class LottoManager {
	#lottos;

	constructor(count) {
		this.#lottos = Array.from({ length: count }).map(() => new Lotto(generateLottoNumbers()));
	}

	getLottosNumbers() {
		return this.#lottos.map((lotto) => lotto.numbers);
	}
}

export default LottoManager;
