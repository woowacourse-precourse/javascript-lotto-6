import InputView from './views/InputView';
import OutputView from './views/OutputView';

export default class Host {
  async getWinningNumbers() {
    try {
      const winningNumbers = await InputView.getWinningNumbers();
      return winningNumbers;
    } catch (error) {
      OutputView.printErrors(error);
      return this.getWinningNumbers();
    }
  }
}
