import LottoBundle from '../model/LottoBundle.js';
import outputView from '../view/OutputView.js';
import inputView from '../view/InputView.js';
import Winners from '../model/Winners.js';

class LottoSimulator {
  #lottoBundle;

  #winners;

  constructor() {
    this.#winners = new Winners();
  }

  async simulation() {
    await this.setMoney();
    this.buyLotto();
    await this.setWinnerNumbers();
    await this.setBonusNumber();
    this.checkLottoResult();
  }

  async setMoney() {
    try {
      const money = await inputView.money();
      this.#lottoBundle = new LottoBundle(money);
    } catch (e) {
      outputView.error(e);
      await this.setMoney();
    }
  }

  buyLotto() {
    this.#lottoBundle.buyLottos();
    outputView.lottos(this.#lottoBundle.getLottos());
  }

  async setWinnerNumbers() {
    try {
      // outputView.newLine();
      const winnerNumbers = await inputView.winnerNumbers();
      this.#winners.setWinnerNumbers(winnerNumbers);
    } catch (e) {
      outputView.error(e);
      await this.setWinnerNumbers();
    }
  }

  async setBonusNumber() {
    try {
      // outputView.newLine();
      const bonusNumber = await inputView.bonusNumber();
      this.#winners.setBonusNumber(bonusNumber);
    } catch (e) {
      outputView.error(e);
      await this.setBonusNumber();
    }
  }

  checkLottoResult() {
    // outputView.newLine();
    this.#winners.countPrize(this.#lottoBundle.getLottos());
    outputView.lottoResult(this.#winners.getPrize());

    this.#winners.calculateRateOfReturns(this.#lottoBundle.getMoney());
    outputView.rateOfReturns(this.#winners.getRateOfReturns());
  }
}

export default LottoSimulator;
