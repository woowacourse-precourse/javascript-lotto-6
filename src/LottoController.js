import { Console } from '@woowacourse/mission-utils';
import Comparison from './domains/Comparison.js';
import Counter from './domains/Counter.js';
import WinningLottoMachine from './domains/WinningLottoMachine.js';
import { INPUT_MESSAGES } from './constants/messages.js';
import printLottoNumbers from './print/printLottoNumbers.js';

class LottoController {
  #myLotto;
  #winningLottoMachine;
  async run() {
    await this.#buyLotto();
    await this.#getWinningNumber();
    await this.#compare();
  }
  async #buyLotto() {
    const inputAmount = await Console.readLineAsync(INPUT_MESSAGES.inputAmount);
    const counter = new Counter(Number(inputAmount));
    this.#myLotto = counter.giveLotto;

    await printLottoNumbers(this.#myLotto.length, this.#myLotto);
  }
  async #getWinningNumber() {
    this.#winningLottoMachine = await WinningLottoMachine.machineStart();
  }
  async #compare() {
    const compare = new Comparison(this.#myLotto, this.#winningLottoMachine);
    await compare.run();
  }
}

export default LottoController;
