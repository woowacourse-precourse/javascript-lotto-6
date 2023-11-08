import { Console } from "@woowacourse/mission-utils";
import MESSAGE from "../static/Message.js";
import Validator from "../utils/Validator.js";

const InputView = {
  async readPurchasePrice() {
    const inputPrice = await Console.readLineAsync(MESSAGE.purchase);

    Validator.inputPurchaseAmount(inputPrice);

    return inputPrice;
  },

  async readWinningNumber() {
    const inputNumbers = await Console.readLineAsync(MESSAGE.winningNumber);

    Validator.inputWinningNumber(inputNumbers);

    return inputNumbers;
  },

  async readBonusNumber(winningNumber) {
    const inputNumber = await Console.readLineAsync(MESSAGE.bonusNumber);

    Validator.inputBonusNumber(inputNumber, winningNumber);

    return inputNumber;
  },
};

export default InputView;
