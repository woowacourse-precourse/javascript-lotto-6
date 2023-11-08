import LottoMachine from '../domain/LottoMachine';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class LottoController {
  #lottoMachine;

  constructor() {
    this.#lottoMachine = new LottoMachine();
  }

  async play() {
    await this.#setGame();
    this.#showLottoInfo();
    this.#showResult();
  }

  async #setGame() {
    await this.#retryInput(async () => {
      const price = await InputView.readPrice();

      this.#lottoMachine.buyLottos(price);
    });

    await this.#retryInput(async () => {
      const winningNumbers = await InputView.readWinningNumbers();
      const bonusNumber = await InputView.readBonusNumber();

      this.#lottoMachine.setWinningLotto(winningNumbers, bonusNumber);
    });
  }

  #showLottoInfo() {
    const lottos = this.#lottoMachine.getLottos();

    OutputView.printLottoCount(lottos.length);
    OutputView.printLottos(lottos);
  }

  #showResult() {
    const profitRate = this.#lottoMachine.getProfitRate();

    OutputView.printMatchResult(this.#lottoMachine.getResult());
    OutputView.printProfitRate(profitRate);
  }

  async #retryInput(func) {
    try {
      return await func();
    } catch (error) {
      OutputView.printError(error.message);
      return this.#retryInput(func);
    }
  }
}

export default LottoController;
