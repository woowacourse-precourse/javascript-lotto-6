import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE, format } from "../constants/ConsoleMessgaes.js";
import { SETTING } from "../constants/Settings.js";

class OutputView {
  static async printLottoPaperCount(number) {
    Console.print(`\n${number}${CONSOLE_MESSAGE.outputLottoNumber}`);
  }

  static async printLotto(number) {
    Console.print(number);
  }

  static printLottoResult(list) {
    Console.print(
      format(CONSOLE_MESSAGE.outputFifth, list[SETTING.fifth_rank - 1])
    );
    Console.print(
      format(CONSOLE_MESSAGE.outputFourth, list[SETTING.fourth_rank - 1])
    );
    Console.print(
      format(CONSOLE_MESSAGE.outputThird, list[SETTING.third_rank - 1])
    );
    Console.print(
      format(CONSOLE_MESSAGE.outputSecond, list[SETTING.second_rank - 1])
    );
    Console.print(
      format(CONSOLE_MESSAGE.outputFirst, list[SETTING.first_rank - 1])
    );
  }
}

export default OutputView;
