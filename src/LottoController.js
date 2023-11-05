import LottoComparison from './domains/LottoComparison.js';
import Counter from './domains/Counter.js';
import WinningLottoMachine from './domains/WinningLottoMachine.js';
import printLottoNumbers from './print/printLottoNumbers.js';
import getInputAmount from './input/getInputAmount.js';

class LottoController {
  #myLotto;
  #winningLottoMachine;
  async run() {
    await this.#buyLotto();
    await this.#getWinningNumber();
    await this.#compare();
  }
  async #buyLotto() {
    const inputAmount = await getInputAmount();
    const counter = new Counter(Number(inputAmount));
    this.#myLotto = counter.giveLotto;

    await printLottoNumbers(this.#myLotto.length, this.#myLotto);
  }
  async #getWinningNumber() {
    this.#winningLottoMachine = await WinningLottoMachine.machineStart();
  }
  async #compare() {
    const compare = new LottoComparison(this.#myLotto, this.#winningLottoMachine);
    compare.run();
  }
}

export default LottoController;
