import Winning from '../model/Winning';
import input from '../utils/input';
import print from '../utils/print';
import InputView from '../view/InputView';

class WinningController {
  #winning;

  constructor() {
    this.#winning = new Winning();
  }

  async createWinning() {
    await this.#inputWinningNumbers();
    await this.#inputBonusNumber();

    return this;
  }

  getWinning() {
    return this.#winning;
  }

  async #inputWinningNumbers() {
    InputView.printInputWinnigNumbersPhrase();
    await this.#recursiveInputWinningNumbers();
    print();
  }

  async #recursiveInputWinningNumbers() {
    try {
      const winnigNumbers = (await input()).split(',').map((number) => Number(number));
      this.#winning.setWinningNumbers(winnigNumbers);
    } catch (error) {
      print(error.message);
      return this.#recursiveInputWinningNumbers();
    }
    return this;
  }

  async #inputBonusNumber() {
    InputView.printInputBonusNumberPhrase();
    await this.#recursiveInputBonusNumber();
    print();
  }

  async #recursiveInputBonusNumber() {
    try {
      const inputValue = await input();
      this.#winning.setBonusNumber(Number(inputValue));
    } catch (error) {
      print(error.message);
      return this.#recursiveInputBonusNumber();
    }
    return this.#winning;
  }
}

export default WinningController;
