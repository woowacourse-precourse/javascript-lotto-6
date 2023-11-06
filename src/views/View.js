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

  printError(error) {
    this.#outputView.print(error.message);
  }
}

export default View;
