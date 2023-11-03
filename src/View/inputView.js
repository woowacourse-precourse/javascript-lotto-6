import { Console } from "@woowacourse/mission-utils";
import validator from "../utils/validator.js";

const inputView = {
  async readPurchasePriceAsync(message) {
    const userInput = await Console.readLineAsync(message);
    validator.validatePrice(userInput);
    return userInput;
  },

  async readWinningNumbersAsync(message) {
    const userInput = await Console.readLineAsync(message);
    const numbers = userInput.split(",");
    return numbers;
  },
};

export default inputView;
