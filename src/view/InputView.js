import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../static/Message.js";
import InputValidator from "../utils/InputValidator.js";

const InputView = {
  async readPurchasePrice() {
    const inputPrice = await Console.readLineAsync(MESSAGE.purchase);

    InputValidator.purchaseAmount(inputPrice);

    return inputPrice;
  },

  async readWinningNumber() {
    const inputNumbers = await Console.readLineAsync(MESSAGE.winningNumber);

    InputValidator.winningNumber(inputNumbers);

    return inputNumbers;
  },

  async readBonusNumber(winningNumber) {
    const inputNumber = await Console.readLineAsync(MESSAGE.bonusNumber);

    InputValidator.bonusNumber(inputNumber, winningNumber);

    return inputNumber;
  },
};

export default InputView;
