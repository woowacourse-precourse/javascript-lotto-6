import GAME_GUIDE_MESSAGE from '../constants/messages.js';
import Lotto from '../domains/Lotto.js';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class View {
  #inputView = InputView;

  #outputView = OutputView;

  async inputMoney() {
    const money = await this.#inputView.readLineAsync(
      GAME_GUIDE_MESSAGE.input.paperMoney,
    );

    return money;
  }

  async inputWinningNumbers() {
    const numbers = await this.#inputView.lottoReadLineAsync(
      GAME_GUIDE_MESSAGE.input.winningNumbers,
    );

    return numbers;
  }

  async inputBonusNumber() {
    const bonusNumber = await this.#inputView.bonusReadLineAsync(
      GAME_GUIDE_MESSAGE.input.bonusNumber,
    );

    return bonusNumber;
  }

  outputWinningStats() {
    this.#outputView.print(GAME_GUIDE_MESSAGE.output.winningResultsStats);
  }
}

export default View;
