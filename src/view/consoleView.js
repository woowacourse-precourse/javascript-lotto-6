import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constant/message.js";

class consoleView {
  async readAmount() {
    return await Console.readLineAsync(INPUT_MESSAGE.AMOUNT);
  }
  async readWinNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.WIN_NUMBER);
  }
  async readBonusNumber() {
    return await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }

  printBuyLotto(amount) {
    this.printNewLine();
    Console.print(`${amount}${OUTPUT_MESSAGE.BOUGHT_LOTTO}`);
  }

  printBoughtLotto(number) {
    number.forEach((e) => {
      Console.print(`[${e.join(", ")}]`);
    });
    this.printNewLine();
  }
  printLottoNumber(lottoNumber) {
    Console.print(`${lottoNumber}`);
  }
  printWinner(winner) {
    Console.print(`${OUTPUT_MESSAGE.WINNER}${winner}`);
  }
  printResult(result, ratio) {
    const RANK = Object.values(OUTPUT_MESSAGE.RANK);
    Console.print(OUTPUT_MESSAGE.WIN_STATISTICS);
    Console.print(OUTPUT_MESSAGE.DIVIDE_LINE);

    for (let i = 0; i < RANK.length; i++) {
      Console.print(`${RANK[i]}${result[i]}${OUTPUT_MESSAGE.UNIT}`);
    }
    Console.print(
      `${OUTPUT_MESSAGE.TOTAL_RESULT.FRONT} ${ratio}${OUTPUT_MESSAGE.TOTAL_RESULT.BACK}`
    );
  }
  printNewLine() {
    Console.print(OUTPUT_MESSAGE.NEWLINE);
  }
  printError(error) {
    Console.print(error);
  }
}

export default consoleView;
