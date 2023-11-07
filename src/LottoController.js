import Counter from './domains/Counter.js';
import LottoComparison from './domains/LottoComparison.js';
import WinningLottoMachine from './domains/WinningLottoMachine.js';
import getInputAmount from './input/getInputAmount.js';
import printLottoNumbers from './print/printLottoNumbers.js';

class LottoController {
  #myLotto;
  #winningLottoMachine;

  async run() {
    await this.#buyLotto();
    await this.#printLotto(this.#myLotto.length, this.#myLotto);
    await this.#getWinningNumbers();
    await this.#compare();
  }
  async #buyLotto() {
    const inputAmount = await getInputAmount();
    const counter = new Counter(inputAmount);
    this.#myLotto = counter.giveLotto();
  }
  async #printLotto(lottoCount, lotto) {
    printLottoNumbers(lottoCount, lotto);
  }
  async #getWinningNumbers() {
    this.#winningLottoMachine = await WinningLottoMachine.machineStart();
  }
  async #compare() {
    new LottoComparison(this.#myLotto, this.#winningLottoMachine).run();
  }
}

export default LottoController;
