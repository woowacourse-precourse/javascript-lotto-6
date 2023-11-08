import Counter from './domains/Counter.js';
import LottoComparison from './domains/LottoComparison.js';
import WinningLottoMachine from './domains/WinningLottoMachine.js';
import getInputAmount from './input/getInputAmount.js';
import { Console } from '@woowacourse/mission-utils';
import printEachLotto from './print/printEachLotto.js';
import { OUTPUT_MESSAGES } from './constants/messages.js';

class LottoController {
  #myLottos;
  #rank;
  #rateOfReturn;

  async run() {
    await this.#buyLotto();
    this.#printLotto(this.#myLottos.length, this.#myLottos);
    await this.#compareWithWinningNumbersAndBonusNumber();
    this.#printLottoResult(this.#rank, this.#rateOfReturn);
  }

  async #buyLotto() {
    const inputAmount = await getInputAmount();
    const counter = new Counter(inputAmount);
    this.#myLottos = counter.giveLotto();
  }

  #printLotto(lottoTicketNumber, lottos) {
    Console.print(OUTPUT_MESSAGES.lottoTicketNumber(lottoTicketNumber));
    lottos.forEach((lotto) => printEachLotto(lotto));
  }

  async #compareWithWinningNumbersAndBonusNumber() {
    const winningLottoMachine = await WinningLottoMachine.machineStart();
    const compareLotto = new LottoComparison(this.#myLottos, winningLottoMachine);
    compareLotto.run();

    this.#rank = compareLotto.rank;
    this.#rateOfReturn = compareLotto.rateOfReturn;
  }

  #printLottoResult(rank, rateOfReturn) {
    OUTPUT_MESSAGES.result(rank).forEach((result) => Console.print(result));
    Console.print(OUTPUT_MESSAGES.rate(rateOfReturn));
  }
}

export default LottoController;
