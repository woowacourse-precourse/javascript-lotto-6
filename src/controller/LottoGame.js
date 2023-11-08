import InputView from '../view/InputView.js';
import LottoBundle from '../model/LottoBundle.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../Lotto.js';
import BonusNumber from '../model/BonusNumber.js';

class LottoGame {
  #lottoBundle;

  #winningLotto;

  #bonusNumber;

  async startGame() {
    this.#lottoBundle = await this.#getLottoBundle();
    this.#lottoBundle.buyLottos();
    OutputView.printLottoNumbers(this.#lottoBundle.getLottoList());

    this.#winningLotto = await this.#getWinningLotto();
    this.#bonusNumber = await this.#getBonusNumber();

    this.#lottoBundle.calculateTotalRank(this.#winningLotto, this.#bonusNumber.getNumber());
    OutputView.printGameResult(this.#lottoBundle.getTotalRank(), this.#lottoBundle.getProfitRate());
  }

  async #getLottoBundle() {
    try {
      const amount = await InputView.readAmount();

      return new LottoBundle(amount);
    } catch (error) {
      OutputView.printErrorMessage(error.message);

      return this.#getLottoBundle();
    }
  }

  async #getWinningLotto() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();
      const splitWinningNumbers = this.#getSplitWinningNumbers(winningNumbers);

      return new Lotto(splitWinningNumbers);
    } catch (error) {
      OutputView.printErrorMessage(error.message);

      return this.#getWinningLotto();
    }
  }

  #getSplitWinningNumbers(winningNumbers) {
    return winningNumbers.split(',').map((number) => number.trim());
  }

  async #getBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumber();
      return new BonusNumber(bonusNumber, this.#winningLotto.getNumbers());
    } catch (error) {
      OutputView.printErrorMessage(error.message);

      return this.#getBonusNumber();
    }
  }
}

export default LottoGame;
