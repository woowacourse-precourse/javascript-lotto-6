import LottoManageModel from '../model/LottoManageModel.js';
import UserLottoModel from '../model/UserLottoModel.js';
import { LOTTO_RANK_PAYABLE } from '../utils/constants.js';
import { printMessage } from '../utils/index.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class LottoController {
  #inputView;

  #outputView;

  #userLottoModel;

  #lottoManageModel;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#userLottoModel = new UserLottoModel();
    this.#lottoManageModel = new LottoManageModel();
  }

  async start() {
    await this.#inputUntilValid(this.#inputAmount.bind(this));
    this.#printUserLottos();
    await this.#inputUntilValid(this.#inputWinningNumbers.bind(this));
    await this.#inputUntilValid(this.#inputBonusNumber.bind(this));

    this.#calculateStatistics();
    this.#printStatistics();
    this.#printRateOfReturn();
  }

  async #inputAmount() {
    if (this.#userLottoModel.getAmount()) {
      return;
    }

    const amount = await this.#inputView.inputAmount();

    this.#userLottoModel.setAmount(amount);
  }

  async #inputWinningNumbers() {
    if (this.#lottoManageModel.getWinningNumbers()) {
      return;
    }

    const numbers = await this.#inputView.inputWinningNumbers();

    this.#lottoManageModel.setWinningNumbers(numbers);
  }

  async #inputBonusNumber() {
    if (this.#lottoManageModel.getBonusNumber()) {
      return;
    }

    const bonusNumber = await this.#inputView.inputBonusNumber();

    this.#lottoManageModel.setBonusNumber(bonusNumber);
  }

  async #inputUntilValid(callback) {
    let isValid = false;

    while (!isValid) {
      try {
        await callback();

        isValid = true;
      } catch (e) {
        printMessage(e.message);
      }
    }
  }

  #printUserLottos() {
    const userLotto = this.#userLottoModel.getUserLottos();

    this.#outputView.printUserLottos(userLotto);
  }

  #printStatistics() {
    const statistics = this.#userLottoModel.getStatistics();

    this.#outputView.printStatistics(statistics);
  }

  #printRateOfReturn() {
    const amount = this.#userLottoModel.getAmount();
    const statistics = this.#userLottoModel.getStatistics();

    const profit = statistics.reduce(
      (acc, count, idx) => acc + count * LOTTO_RANK_PAYABLE[idx],
      0,
    );

    const rateOfReturn = parseFloat((profit / amount) * 100);

    this.#outputView.printRateOfReturn(rateOfReturn);
  }

  #calculateStatistics() {
    const userLottos = this.#userLottoModel.getUserLottos();

    const matchCountByLottos = userLottos.map((lotto) =>
      this.#lottoManageModel.returnMatchCountByLotto(lotto),
    );

    this.#userLottoModel.setStatistics(matchCountByLottos);
  }
}

export default LottoController;
