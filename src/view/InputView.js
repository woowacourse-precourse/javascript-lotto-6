import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/ConsoleMessgaes.js";

class InputView {
  static async getPrice() {
    const price = await Console.readLineAsync(CONSOLE_MESSAGE.inputPrice);
    return price;
  }
}

export default InputView;
