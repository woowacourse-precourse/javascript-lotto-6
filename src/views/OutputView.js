import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE, WINNING_RESULT_DETAILS } from "../constants/Message";

const OutputView = {
  printInsertMoneyMessage() {
    Console.print(GUIDE_MESSAGE.insertMoney);
  },

  printInsertWinningNumbersMessage() {
    Console.print(GUIDE_MESSAGE.insertWinningNumbers);
  },

  printInsertBonusNumberMessage() {
    Console.print(GUIDE_MESSAGE.insertBonusNumber);
  },

  printLottoCount(lottoCount) {
    Console.print(`${lottoCount}${GUIDE_MESSAGE.totalTickets}`);
  },

  printLottos(lottos) {
    for (let lotto of lottos) {
      const numbers = lotto.getNumbers();
      Console.print(`[${numbers.join(", ")}]`);
    }
  },

  printError(error) {
    if (error.message.startsWith("[ERROR]")) {
      Console.print(error.message);
      return;
    }
    throw error;
  },

  printResult(roi, result) {
    Console.print(GUIDE_MESSAGE.winningStatistics);
    Console.print(GUIDE_MESSAGE.divider);

    Console.print(`${WINNING_RESULT_DETAILS.FIFTH}${result[5]}${GUIDE_MESSAGE.amount}`);
    Console.print(`${WINNING_RESULT_DETAILS.FOURTH}${result[4]}${GUIDE_MESSAGE.amount}`);
    Console.print(`${WINNING_RESULT_DETAILS.THIRD}${result[3]}${GUIDE_MESSAGE.amount}`);
    Console.print(`${WINNING_RESULT_DETAILS.SECOND}${result[2]}${GUIDE_MESSAGE.amount}`);
    Console.print(`${WINNING_RESULT_DETAILS.FIRST}${result[1]}${GUIDE_MESSAGE.amount}`);
    Console.print(
      GUIDE_MESSAGE.totalReturn.replace(
        "*",
        roi.toLocaleString("ko-KR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }),
      ),
    );
  },
};

export default OutputView;