import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../constants/ConsoleMessgaes.js";

class OutputView {
  static async printLottoCount(number) {
    Console.print(`\n${number}${CONSOLE_MESSAGE.outputLottoNumber}`);
  }
  static async printLotto(number) {
    Console.print(number);
  }
}

export default OutputView;
