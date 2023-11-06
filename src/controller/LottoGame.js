import InputView from '../view/InputView.js';
import { SYMBOL } from '../constants/Constant.js';
import LottoBundle from '../model/LottoBundle.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';
import BonusNumber from '../model/BonusNumber.js';

class LottoGame {
  #lottoBundle;

  async startGame() {
    this.#lottoBundle = await this.#getLottoBundle();
    this.#lottoBundle.buyLottos();
    OutputView.printLottoNumbers(this.#lottoBundle.getLottoList());

    const winningLotto = await this.#getWinningLotto();
    const bonusNumber = await this.#getBonusNumber();

    this.#lottoBundle.calculateTotalRank(winningLotto, bonusNumber.getNumber());
    OutputView.printGameResult(this.#lottoBundle.getTotalRank(), this.#lottoBundle.getProfitRate());
  }

  async #getLottoBundle() {
    try {
      const amount = await InputView.readAmount();

      return new LottoBundle(amount);
    } catch (error) {
      OutputView.printMessage(error.message);

      return this.#getLottoBundle();
    }
  }

  async #getWinningLotto() {
    try {
      const winningNumbers = await InputView.readWinningNumbers();
      const splitWinningNumbers = this.#getSplitWinningNumbers(winningNumbers);

      return new Lotto(splitWinningNumbers);
    } catch (error) {
      OutputView.printMessage(error.message);

      return this.#getWinningLotto();
    }
  }

  #getSplitWinningNumbers(winningNumbers) {
    return winningNumbers.split(SYMBOL.comma).map((number) => number.trim());
  }

  async #getBonusNumber() {
    try {
      const bonusNumber = await InputView.readBonusNumber();

      return new BonusNumber(bonusNumber);
    } catch (error) {
      OutputView.printMessage(error.message);

      return this.#getBonusNumber();
    }
  }
}

export default LottoGame;
