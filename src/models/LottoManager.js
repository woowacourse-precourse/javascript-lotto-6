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

	checkWinningStatus(winningNumber, winningBonusNumber) {
		const formattedWinningNumber = winningNumber.map((number) => Number(number));
		const formattedBonusNumber = Number(winningBonusNumber);

		const lottoResults = this.#lottos.map((lotto) =>
			lotto.compareWithWinningNumbers(formattedWinningNumber, formattedBonusNumber)
		);

		return lottoResults;
	}
}

export default LottoManager;
