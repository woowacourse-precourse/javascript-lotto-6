import InputView from '../view/InputView.js';
import Validator from '../validator/Validator.js';
import { CONSTANT, RANK, SYMBOL } from '../constants/Constant.js';
import LottoBundle from '../model/LottoBundle.js';
import OutputView from '../view/OutputView.js';
import Lotto from '../model/Lotto.js';

class LottoGame {
  #lottoBundle;

  #winningNumbers;

  async startGame() {
    const lottoCount = await this.#getLottoCount();

    this.#lottoBundle = new LottoBundle();
    this.#lottoBundle.buyLottos(lottoCount);
    OutputView.printLottoNumbers(lottoCount, this.#lottoBundle.getTotalLottoNumberString());

    const winningLotto = await this.#getWinningLotto();
    const bonusNumber = await this.#getBonusNumber();
    const totalRank = this.#lottoBundle.getTotalRank(winningLotto, bonusNumber);

    const reward = this.#getReward(totalRank);
    const profitRate = this.#getProfitRate(reward, lottoCount);
  }

  async #getLottoCount() {
    try {
      const amount = await InputView.readAmount();
      Validator.validateAmount(amount);

      return amount / CONSTANT.amountUnit;
    } catch (error) {
      OutputView.printMessage(error.message);

      return this.#getLottoCount();
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
      Validator.validateBonusNumber(bonusNumber);

      return Number(bonusNumber);
    } catch (error) {
      OutputView.printMessage(error.message);

      return this.#getBonusNumber();
    }
  }

  #getReward(totalRank) {
    return totalRank.reduce((sum, count, index) => sum + RANK.reward[index] * count, 0);
  }

  #getProfitRate(reward, lottoCount) {
    return ((reward / (lottoCount * CONSTANT.amountUnit)) * 100).toFixed(1);
  }
}

export default LottoGame;
