import MessageFormat from '../utils/MessageFormat';
import MESSAGE from '../utils/constants/string';
import SYMBOL from '../utils/constants/symbol';
import InputView from './InputView';
import OutputView from './OutputView';
import NUMBER from '../utils/constants/number';

const { statistics } = NUMBER;
const { prizes } = statistics;

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async readMoneyAmount() {
    const moneyAmountInput = await this.#inputView.readInteger(
      MESSAGE.read.moneyAmount,
    );
    return this.#parseNumberFromString(moneyAmountInput);
  }

  async readWinningNumbers() {
    const winningNumbersInput = await this.#inputView.readMultipleIntegers(
      MESSAGE.read.lottoNumbers,
    );
    return this.#parseMultipleNumbersFromString(winningNumbersInput);
  }

  async readBonusNumber() {
    const bonusNumberInput = await this.#inputView.readInteger(
      MESSAGE.read.bonusNumber,
    );
    return this.#parseNumberFromString(bonusNumberInput);
  }

  #parseNumberFromString(input) {
    return Number(input);
  }

  #parseMultipleNumbersFromString(input) {
    return input.split(SYMBOL.inputNumberSeparator).map(Number);
  }

  printLottoPurchaseResult(lottos) {
    const count = lottos.length;
    this.printNewLine();
    this.#outputView.print(MessageFormat.lottoPurchaseHeader(count));
    const lottoNumbers = lottos.map(item =>
      MessageFormat.lottoTicket(item.getNumbers()),
    );
    lottoNumbers.forEach(item => this.#outputView.print(item));
    this.printNewLine();
  }

  printLottoStats(result) {
    this.#printLottoStatsHeader();
    Object.entries(result).forEach(([category, count]) => {
      this.#printLottoStatItem(category, count);
    });
    this.printNewLine();
  }

  #printLottoStatsHeader() {
    this.printNewLine();
    this.#outputView.print(MESSAGE.statsHeader);
  }

  #printLottoStatItem(category, count) {
    const prize = prizes[category];
    const resultMessage = MessageFormat.lottoResultMessage(
      category,
      prize,
      count,
    );
    this.#outputView.print(resultMessage);
  }

  printProfitRate(profitRate) {
    const profitRateMessage = MessageFormat.profitRateMessage(profitRate);
    this.#outputView.print(profitRateMessage);
  }

  printNewLine() {
    this.#outputView.print('');
  }

  printError(error) {
    this.#outputView.print(error.message);
  }
}

export default View;
