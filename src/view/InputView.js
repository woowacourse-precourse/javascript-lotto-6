import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/ConsoleMessgaes.js";

class InputView {
  static async getPrice() {
    try {
      const price = await Console.readLineAsync(CONSOLE_MESSAGE.inputPrice);
      return price;
    } catch (error) {
      throw error;
    }
  }

  static async getLottoNumbers() {
    try {
      const lottoNumbers = await Console.readLineAsync(
        CONSOLE_MESSAGE.inputLottoNumbers
      );
      return lottoNumbers;
    } catch (error) {
      throw error;
    }
  }

  static async getBonusNumber() {
    try {
      const bonuseNubmer = await Console.readLineAsync(
        CONSOLE_MESSAGE.inputBonusNumber
      );
      return bonuseNubmer;
    } catch (error) {
      throw error;
    }
  }
}

export default InputView;
