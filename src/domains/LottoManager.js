import LottoResult from './LottoResult.js';
import LottoStore from './LottoStore.js';
import LottoWinnigInfo from './LottoWinningInfo.js';

class LottoManager {
  #lottos;

  #winningInfo;

  #lottoResult;

  constructor() {
    this.#lottos = null;
    this.#winningInfo = new LottoWinnigInfo();
    this.#lottoResult = new LottoResult();
  }

  purchaseLottos(purchaseAmount) {
    const lottoStore = new LottoStore();
    this.#lottos = lottoStore.generateLottos(purchaseAmount);
  }

  setWinningNumbers(winningNumbers) {
    this.#winningInfo.setWinningNumbers(winningNumbers);
  }

  setBonusNumber(bonusNumber) {
    this.#winningInfo.setBonusNumber(bonusNumber);
  }

  getTotalLottoNumbers() {
    const totalLottoNumbers = this.#lottos.map((lotto) => lotto.getNumbers());
    return totalLottoNumbers;
  }

  getLottoWinningResult() {
    const winningNumbers = this.#winningInfo.getWinningNumbers();
    const bonusNumber = this.#winningInfo.getBonusNumber();
    this.#lottoResult.judgeLottosRank(this.#lottos, winningNumbers, bonusNumber);
    const winningResult = this.#lottoResult.getWinningResult();

    return winningResult;
  }

  getLottoReturnRate() {
    const lottoCount = this.#lottos.length;
    const returnRate = this.#lottoResult.calculateReturnRate(lottoCount);

    return returnRate;
  }
}

export default LottoManager;
