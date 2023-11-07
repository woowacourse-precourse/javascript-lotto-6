import { Console } from "@woowacourse/mission-utils";
import { Message } from "../static/Constant.js";
const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },
  printLottoTicketCount(count) {
    Console.print(`\n${count}${Message.LOTTO_TICKET}`);
  },
  printLottoTickets(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      Console.print("[" + numbers[i].join(", ") + "]");
    }
  },
};

export default OutputView;
