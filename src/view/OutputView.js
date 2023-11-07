import { Console } from "@woowacourse/mission-utils";
import { Message } from "../model/Constant.js";
const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },
  printLottoTicketCount(count) {
    Console.print(`\n${count}${Message.LOTTO_TICKET}`);
  },
  printLottoNumbers(numbers) {
    Console.print("[" + numbers.join(", ") + "]");
  },
};

export default OutputView;
