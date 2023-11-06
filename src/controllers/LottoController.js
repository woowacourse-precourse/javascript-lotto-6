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
    this.setMyLotto();
    this.setWinningLotto();
    this.setMyLottoResult();
  }

  setMyLotto() {
    const purchaseLottoAmount = InputController.loopGetInput(
      InputView.getPurchaseLottoAmount(),
    );
    const lottoCount = this.#calculateLottoCount(purchaseLottoAmount);
    this.#showLottoCount(lottoCount);

    this.#myLotto = new MyLotto(purchaseLottoAmount, lottoCount);
    this.#myLotto.showMyLottoNumbers();
  }

  #calculateLottoCount({ lottoAmount }) {
    return parseInt(lottoAmount / NUMBER.PURCHASE_AMOUNT_UNIT, 10);
  }

  #showLottoCount({ lottoCount }) {
    OutputView.printLottoCount(lottoCount);
  }

  setWinningLotto() {
    const winningNumbers = InputController.loopGetInput(
      InputView.getWinningNumbers(),
    );
    const bonusNumber = InputController.loopGetInput(
      InputView.getBonusNumber(),
    );

    this.#winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }

  setMyLottoResult() {
    const winningNumbers = this.#winningLotto.getWinningNumbers();
    const bonusNumber = this.#winningLotto.getBonusNumber();
    const matchingResult = this.#myLotto.findMatching(
      winningNumbers,
      bonusNumber,
    );

    this.#statistics = new LottoStatistics(matchingResult);
    this.#statistics.showLottoStatistics();
    this.#statistics.showRateOfReturn(this.#myLotto.getPurchaseLottoAmount());
  }
}

export default LottoController;
