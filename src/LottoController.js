import Counter from './domains/Counter.js';
import LottoComparison from './domains/LottoComparison.js';
import WinningLottoMachine from './domains/WinningLottoMachine.js';
import getInputAmount from './input/getInputAmount.js';
import { Console } from '@woowacourse/mission-utils';
import printEachLotto from './print/printEachLotto.js';
import { OUTPUT_MESSAGES } from './constants/messages.js';

class LottoController {
  #myLotto;

  async run() {
    await this.#buyLotto();
    this.#printLotto(this.#myLotto.length, this.#myLotto);
    await this.#compareWithWinningNumbersAndBonusNumber();
  }

  async #buyLotto() {
    const inputAmount = await getInputAmount();
    const counter = new Counter(inputAmount);
    this.#myLotto = counter.giveLotto();
  }

  #printLotto(lottoTicketNumber, lottos) {
    Console.print(OUTPUT_MESSAGES.lottoTicketNumber(lottoTicketNumber));
    lottos.forEach((lotto) => printEachLotto(lotto));
  }

  async #compareWithWinningNumbersAndBonusNumber() {
    const winningLottoMachine = await WinningLottoMachine.machineStart();
    new LottoComparison(this.#myLotto, winningLottoMachine).run();
  }
}

export default LottoController;
