import InputView from '../views/InputView';
import InputController from './InputController';
import NUMBER from '../constants/Number';
import OutputView from '../views/OutputView';
import MyLotto from '../models/MyLotto';
import WinningLotto from '../models/WinningLotto';
import LottoStatistics from '../models/LottoStatistics';

class LottoController {
  #myLotto;

  #winningLotto;

  #statistics;

  async lottoStart() {
    await this.setMyLotto();
    await this.setWinningLotto();
    this.setMyLottoResult();
  }

  async setMyLotto() {
    const purchaseLottoAmount = await InputController.loopGetInput(
      InputView.getPurchaseLottoAmount(),
    );
    const lottoCount = await this.#calculateLottoCount(purchaseLottoAmount);
    this.#showLottoCount(lottoCount);

    this.#myLotto = new MyLotto(purchaseLottoAmount, lottoCount);
    this.#myLotto.showMyLottoNumbers();
  }

  async #calculateLottoCount(lottoAmount) {
    return parseInt(lottoAmount / NUMBER.PURCHASE_AMOUNT_UNIT, 10);
  }

  #showLottoCount(lottoCount) {
    OutputView.printLottoCount(lottoCount);
  }

  async setWinningLotto() {
    const winningNumbers = await InputController.loopGetInput(InputView.getWinningNumbers());
    const bonusNumber = await InputController.loopGetInput(InputView.getBonusNumber());

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  setMyLottoResult() {
    const winningNumbers = this.#winningLotto.getWinningNumbers();
    const bonusNumber = this.#winningLotto.getBonusNumber();
    const matchingResult = this.#myLotto.findMatching(winningNumbers, bonusNumber);

    this.#statistics = new LottoStatistics(matchingResult);
    this.#statistics.showLottoStatistics();
    this.#statistics.showRateOfReturn(this.#myLotto.getPurchaseAmount());
  }
}

export default LottoController;
