import { LOTTO_MESSAGES } from './constants/lottoMessage.js';
import { asyncFnHandlerWithError } from './utils/asyncFnHandlerWithError.js';
import { InputView } from './views/InputView.js';
import { OutputView } from './views/OutputView.js';
import Money from './domains/Money.js';
import Lotto from './Lotto.js';

class App {
  /**
   * @type { number }
   */

  #lottoAmount;

  /**
   * @type { Lotto[] } 구입한 총 로또
   */

  #lottos;

  async play() {
    await asyncFnHandlerWithError(this.inputMoney, this);
    this.printLottos();
  }

  async inputMoney() {
    const money = await InputView.readLine(LOTTO_MESSAGES.input_money);
    this.#lottoAmount = Money.getLottoAmount(money);
    OutputView.divideLine();
  }

  printLottos() {
    OutputView.printLine(LOTTO_MESSAGES.buy_lottos(this.#lottoAmount));
    this.#lottos = Lotto.getPurchasedLottos(this.#lottoAmount);
    this.#lottos.forEach((lotto) => OutputView.printLine(lotto.toStringFromNumbers()));
    OutputView.divideLine();
  }
}

export default App;
