import { MissionUtils } from '@woowacourse/mission-utils';
import Print from '../Print.js';
import User from '../User.js';
import Winning from '../Winning.js';

class InputView {
  static input(printString = '') {
    return MissionUtils.Console.readLineAsync(printString);
  }

  static async inputPurchaseAmount() {
    Print.printInputPurchaseAmountPhrase();
    const user = await InputView.#recursiveInputPurchaseAmount();
    Print.print();

    return user;
  }

  static async inputWinning() {
    const winning = new Winning();
    await InputView.#inputWinningNumbers(winning);
    Print.print();
    await InputView.#inputBonusNumber(winning);
    Print.print();

    return winning;
  }

  static async #recursiveInputPurchaseAmount() {
    let user;
    try {
      const purchaseAmount = await InputView.input();
      user = new User(Number(purchaseAmount));
    } catch (error) {
      Print.print(error.message);
      return InputView.#recursiveInputPurchaseAmount();
    }
    return user;
  }

  static async #inputWinningNumbers(winning) {
    Print.printInputWinnigNumbersPhrase();
    await InputView.#recursiveInputWinningNumbers(winning);
    Print.print();
  }

  static async #recursiveInputWinningNumbers(winning) {
    try {
      const inputValue = await InputView.input();
      const winnigNumbers = inputValue.split(',').map((number) => Number(number));
      winning.setWinningNumbers(winnigNumbers);
    } catch (error) {
      Print.print(error.message);
      return InputView.#recursiveInputWinningNumbers(winning);
    }
    return winning;
  }

  static async #inputBonusNumber(winning) {
    Print.printInputBonusNumberPhrase();
    await InputView.#recursiveInputBonusNumber(winning);
    Print.print();
  }

  static async #recursiveInputBonusNumber(winning) {
    try {
      const inputValue = await InputView.input();
      winning.setBonusNumber(Number(inputValue));
    } catch (error) {
      Print.print(error.message);
      return InputView.#recursiveInputBonusNumber(winning);
    }
    return winning;
  }
}

export default InputView;
