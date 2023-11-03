import { LOTTO_MESSAGES } from './constants/lottoMessage.js';
import { asyncFnHandlerWithError } from './utils/asyncFnHandlerWithError.js';
import { InputView } from './views/InputView.js';
import { OutputView } from './views/OutputView.js';
import Money from './domains/Money.js';

class App {
  /**
   * @type { number }
   */

  #lottoAmount;

  async play() {
    await asyncFnHandlerWithError(this.inputMoney, this);
  }

  async inputMoney() {
    const money = await InputView.readLine(LOTTO_MESSAGES.input_money);
    this.#lottoAmount = Money.getLottoAmount(money);
    OutputView.divideLine();
  }
}

export default App;
