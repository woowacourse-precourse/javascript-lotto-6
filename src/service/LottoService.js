import { BRACKET, DIVIDER } from '../constants/Symbol.js';
import LottoGame from '../model/LottoGame.js';
import LottoResultCalculator from '../model/LottoResultCalculator.js';

export default class LottoService {
  #lottoGame;

  constructor(seedMoney) {
    this.#lottoGame = new LottoGame(seedMoney);
  }

  getLottoList() {
    const { lottoList, lottoAmount } = this.#lottoGame.getLottoes();

    return {
      lottoList: Array.from(
        lottoList,
        (lotto) =>
          `${BRACKET.open}${lotto.getLottoNumbers().join(DIVIDER.spaceComma)}${
            BRACKET.close
          }`
      ),
      lottoAmount,
    };
  }

  getCompareResults(winningNumbers, winningBonusNumber) {
    const { lottoList, lottoAmount } = this.#lottoGame.getLottoes();
    const lottoResultCalculator = new LottoResultCalculator(
      winningNumbers,
      winningBonusNumber
    );

    return {
      lottoResults: lottoResultCalculator.calculateResults(lottoList),
      lottoAmount,
    };
  }
}
