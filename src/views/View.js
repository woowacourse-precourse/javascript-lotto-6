import MessageFormat from '../utils/MessageFormat.js';
import MESSAGE from '../utils/constants/string.js';
import SYMBOL from '../utils/constants/symbol.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readMoneyAmount() {
    const moneyAmountInput = await this.#inputView.readInteger(
      MESSAGE.read.moneyAmount,
    );
    return Number(moneyAmountInput);
  }

  async readWinningNumbers() {
    const winningNumbersInput = await this.#inputView.readMultipleIntegers(
      MESSAGE.read.lottoNumbers,
    );
    return winningNumbersInput.split(SYMBOL.inputNumberSeparator).map(Number);
  }

  async readBonusNumber() {
    const bonusNumberInput = await this.#inputView.readInteger(
      MESSAGE.read.bonusNumber,
    );
    return Number(bonusNumberInput);
  }

  printLottoPurchaseResult(lottos) {
    const count = lottos.length;
    this.#outputView.print(MessageFormat.lottoPurchaseHeader(count));
    const lottoNumbers = lottos.map(item =>
      MessageFormat.lottoTicket(item.getNumbers()),
    );
    lottoNumbers.forEach(item => this.#outputView.print(item));
  }

  printError(error) {
    this.#outputView.print(error.message);
  }
}

export default View;
