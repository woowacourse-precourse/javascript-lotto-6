import { Console } from "@woowacourse/mission-utils";
import { Message, RewardsMessage } from "../static/Constant.js";
const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },
  printLottoTicketCount(count) {
    Console.print(`${count}${Message.LOTTO_TICKET}`);
  },
  printLottoTickets(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      Console.print(`[${numbers[i].join(", ")}]`);
    }
  },
  printLottoWinningStatistics(rank, profit) {
    Console.print(Message.LOTTO_RESULT);
    Console.print("3개 일치 (5,000원) - 1개");
    for (let i = 4; i >= 0; i--) {
      Console.print(`${RewardsMessage[i]}${rank[i]}개`);
    }
    Console.print(`총 수익률은 ${profit}% 입니다.`);
  },
};

export default OutputView;
